/**
 * PyXom Execution Verifier
 * Verifica que PyXom (Python con Pyodide) esté funcionando correctamente
 */

import PythonRunner from '../components/pyxom/core/PythonRunner';
import { logger } from './logger';

export async function verifyPyXomExecution() {
  logger.log('🐍 Verificando PyXom con Pyodide WebAssembly...\n');
  
  const tests = [
    {
      name: 'Test básico de ejecución',
      code: `
print("¡PyXom funcionando correctamente!")
print("Ejecución con Pyodide WebAssembly")
print("Python version:", __import__('sys').version)
`,
      expectedOutput: /PyXom funcionando correctamente/
    },
    {
      name: 'Test de cálculos matemáticos',
      code: `
import math

a = 5
b = 10
print(f"La suma de {a} + {b} = {a + b}")
print(f"La raíz cuadrada de 16 = {math.sqrt(16)}")
print(f"Pi = {math.pi}")
`,
      expectedOutput: /La suma de 5 \+ 10 = 15/
    }
  ];

  let passedTests = 0;
  let failedTests = 0;
  const results: any[] = [];

  try {
    logger.log('📦 Inicializando Pyodide WebAssembly...');
    const startTime = Date.now();
    // PythonRunner.initialize(); // Ya no es necesario, es automático
    const loadTime = Date.now() - startTime;
    // logger.log(`✅ Pyodide cargado en ${loadTime}ms\n`);

    // Ejecutar cada test
    for (const test of tests) {
      logger.log(`🧪 ${test.name}...`);
      
      try {
        const startExec = Date.now();
        // Usamos el método estático execute directamente
        const result = await PythonRunner.execute(test.code);
        const execTime = Date.now() - startExec;
        
        if (result.success && test.expectedOutput.test(result.output)) {
          logger.log(`✅ Pasó (${execTime}ms)`);
          logger.log(`   Output: ${result.output.split('\n')[0]}...`);
          passedTests++;
          results.push({
            test: test.name,
            passed: true,
            time: execTime,
            output: result.output
          });
        } else {
          logger.log(`❌ Falló`);
          logger.log(`   Output esperado: ${test.expectedOutput}`);
          logger.log(`   Output recibido: ${result.output}`);
          if (result.error) {
            logger.log(`   Error: ${result.error}`);
          }
          failedTests++;
          results.push({
            test: test.name,
            passed: false,
            error: result.error || 'Output no coincide',
            output: result.output
          });
        }
      } catch (error) {
        logger.log(`❌ Error ejecutando test: ${error}`);
        failedTests++;
        results.push({
          test: test.name,
          passed: false,
          error: error instanceof Error ? error.message : String(error)
        });
      }
      
      logger.log('');
    }

    // Resumen final
    logger.log('\n📊 Resumen de verificación PyXom:');
    logger.log('================================');
    logger.log(`✅ Tests pasados: ${passedTests}/${tests.length}`);
    logger.log(`🐍 Python version: Pyodide`);
    
    return {
      success: passedTests === tests.length,
      passedTests,
      totalTests: tests.length,
      loadTime,
      message: passedTests === tests.length 
        ? 'PyXom está funcionando perfectamente con Pyodide WebAssembly'
        : `PyXom funcionando parcialmente (${passedTests}/${tests.length} tests pasados)`,
      results
    };
    
  } catch (error) {
    logger.error('❌ Error crítico verificando PyXom:', error);
    return {
      success: false,
      passedTests: 0,
      totalTests: tests.length,
      message: 'Error al verificar PyXom',
      error: error instanceof Error ? error.message : String(error),
      results
    };
  }
}

if (import.meta.hot) {
  verifyPyXomExecution().then(result => {
    logger.log('\n🎯 Resultado final:', result);
  });
}
