import * as webllm from "@mlc-ai/web-llm";

export interface TutorResponse {
  message: string;
  isError: boolean;
}

export class AITutorService {
  private static engine: webllm.MLCEngineInterface | null = null;
  private static selectedModel = "Phi-3-mini-4k-instruct-q4f16_1-MLC";
  private static isLoading = false;

  static async initialize(onProgress?: (progress: number) => void): Promise<void> {
    if (this.engine) return;
    if (this.isLoading) return;

    console.log("🚀 Iniciando motor de IA local (Microsoft Phi-3)...");
    
    // Check WebGPU support
    if (!('gpu' in navigator)) {
        console.warn("WebGPU not supported");
        return;
    }
    
    const adapter = await (navigator as any).gpu.requestAdapter();

    this.isLoading = true;
    
    try {
      this.engine = await webllm.CreateMLCEngine(this.selectedModel, {
        initProgressCallback: (report) => {
          const progress = Math.round((report.progress || 0) * 100);
          if (onProgress) {
            onProgress(progress);
          }
          // Log detallado de la descarga real del modelo
          console.log(`[AI Engine] ${progress}% - ${report.text}`);
        }
      });
      console.log("✅ Motor de IA cargado correctamente en la GPU.");
    } catch (error) {
      this.isLoading = false;
      console.error("❌ Error cargando el modelo local:", error);
      throw new Error("Error initializing AI Engine: " + (error as Error).message);
    } finally {
      this.isLoading = false;
    }
  }

  static async explainError(code: string, error: string): Promise<string> {
    if (!this.engine) {
      await this.initialize();
    }

    const prompt = `
      Eres un tutor de programación experto en Python. 
      Un alumno ha escrito el siguiente código y ha obtenido un error.
      
      CÓDIGO DEL ALUMNO:
      \`\`\`python
      ${code}
      \`\`\`
      
      ERROR OBTENIDO:
      \`\`\`
      ${error}
      \`\`\`
      
      REGLAS CRÍTICAS:
      1. NO des el código corregido.
      2. Explica de forma sencilla por qué ocurre el error.
      3. Da una pista pedagógica para que el alumno lo arregle solo.
      4. Sé breve y amable.
      5. Responde en Español.
    `;

    const messages: webllm.ChatCompletionMessageParam[] = [
      { role: "system", content: "Eres un tutor socrático de Python que ayuda sin dar la solución directa." },
      { role: "user", content: prompt }
    ];

    try {
      const reply = await this.engine!.chat.completions.create({
        messages,
        temperature: 0.7,
      });
      return reply.choices[0].message.content || "Lo siento, no puedo analizar este error ahora mismo.";
    } catch (err) {
      return "Hubo un error al procesar tu consulta con la IA local.";
    }
  }
}
