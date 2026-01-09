import { useState } from 'react';
import { CheckCircleIcon, XCircleIcon, InformationCircleIcon  } from '@heroicons/react/24/outline';

interface SmartAnalysis {
  specific: { score: number; feedback: string; keywords: string[] };
  measurable: { score: number; feedback: string; keywords: string[] };
  achievable: { score: number; feedback: string; keywords: string[] };
  relevant: { score: number; feedback: string; keywords: string[] };
  timeBound: { score: number; feedback: string; keywords: string[] };
  overall: number;
  suggestions: string[];
}

export default function ValidadorSMART() {
  const [requisito, setRequisito] = useState('');
  const [analysis, setAnalysis] = useState<SmartAnalysis | null>(null);
  const [ejemploActivo, setEjemploActivo] = useState<number | null>(null);

  const ejemplos = [
    {
      id: 1,
      tipo: 'Bueno',
      texto: 'El sistema debe permitir a cada usuario registrado crear hasta 10 informes personalizados por día hábil',
      color: 'green'
    },
    {
      id: 2,
      tipo: 'Regular',
      texto: 'El sistema debe ser rápido y fácil de usar',
      color: 'yellow'
    },
    {
      id: 3,
      tipo: 'Malo',
      texto: 'Hacer un sistema de gestión',
      color: 'red'
    }
  ];

  const analizarRequisito = (req: string) => {
    const reqLower = req.toLowerCase();
    const palabras = reqLower.split(/\s+/);
    
    // Análisis SMART
    const analysis: SmartAnalysis = {
      specific: analizarEspecifico(req, reqLower, palabras),
      measurable: analizarMedible(req, reqLower),
      achievable: analizarAlcanzable(req, reqLower, palabras),
      relevant: analizarRelevante(req, reqLower, palabras),
      timeBound: analizarTemporal(req, reqLower, palabras),
      overall: 0,
      suggestions: []
    };

    // Calcular puntuación total
    analysis.overall = (
      analysis.specific.score +
      analysis.measurable.score +
      analysis.achievable.score +
      analysis.relevant.score +
      analysis.timeBound.score
    ) / 5;

    // Generar sugerencias
    analysis.suggestions = generarSugerencias(analysis);
    
    setAnalysis(analysis);
  };

  const analizarEspecifico = (_req: string, reqLower: string, _palabras: string[]) => {
    const verbosAccion = ['debe', 'permitir', 'gestionar', 'procesar', 'validar', 'generar', 'almacenar', 'mostrar'];
    const tieneVerbo = verbosAccion.some(v => reqLower.includes(v));
    const tieneSujeto = reqLower.includes('sistema') || reqLower.includes('usuario') || reqLower.includes('aplicación');
    const tieneObjeto = _palabras.length > 10;
    
    const keywords = verbosAccion.filter(v => reqLower.includes(v));
    const score = (tieneVerbo ? 40 : 0) + (tieneSujeto ? 30 : 0) + (tieneObjeto ? 30 : 0);
    
    return {
      score,
      feedback: score >= 70 ? 'Define claramente qué, quién y cómo' : 'Necesita más especificidad',
      keywords
    };
  };

  const analizarMedible = (req: string, reqLower: string) => {
    const tieneNumeros = /\d+/.test(req);
    const tieneCantidades = ['todos', 'cada', 'máximo', 'mínimo', 'hasta', 'al menos'].some(c => reqLower.includes(c));
    const tieneMetricas = ['segundos', 'minutos', 'usuarios', 'registros', 'mb', 'gb'].some(m => reqLower.includes(m));
    
    const keywords = [];
    if (tieneNumeros) keywords.push('números');
    if (tieneCantidades) keywords.push('cantidades');
    if (tieneMetricas) keywords.push('métricas');
    
    const score = (tieneNumeros ? 40 : 0) + (tieneCantidades ? 30 : 0) + (tieneMetricas ? 30 : 0);
    
    return {
      score,
      feedback: score >= 70 ? 'Incluye métricas cuantificables' : 'Añade números o métricas específicas',
      keywords
    };
  };
  const analizarAlcanzable = (_req: string, reqLower: string, palabras: string[]) => {
    const palabrasIrreales = ['infinito', 'ilimitado', 'perfecto', 'imposible', 'nunca', 'siempre todo'];
    const tieneIrreales = palabrasIrreales.some(p => reqLower.includes(p));
    const complejidadRazonable = palabras.length < 50;
    const noDemasiadoAmbicioso = !reqLower.includes('tiempo real') || reqLower.includes('casi');
    
    const keywords = tieneIrreales ? palabrasIrreales.filter(p => reqLower.includes(p)) : ['realista'];
    const score = (!tieneIrreales ? 40 : 0) + (complejidadRazonable ? 30 : 0) + (noDemasiadoAmbicioso ? 30 : 0);
    
    return {
      score,
      feedback: score >= 70 ? 'Parece alcanzable y realista' : 'Considera si es técnicamente viable',
      keywords
    };
  };

  const analizarRelevante = (_req: string, reqLower: string, _palabras: string[]) => {
    const palabrasRelevantes = ['sistema', 'usuario', 'aplicación', 'negocio', 'cliente', 'proceso'];
    const tieneContexto = palabrasRelevantes.some(p => reqLower.includes(p));
    const tieneJustificacion = reqLower.includes('para') || reqLower.includes('con el fin');
    
    const keywords = palabrasRelevantes.filter(p => reqLower.includes(p));
    const score = (tieneContexto ? 60 : 0) + (tieneJustificacion ? 40 : 0);
    
    return {
      score,
      feedback: score >= 70 ? 'Está bien contextualizado' : 'Relaciona con objetivos del sistema',
      keywords
    };
  };

  const analizarTemporal = (_req: string, reqLower: string, _palabras: string[]) => {
    const palabrasTemporales = ['día', 'hora', 'minuto', 'segundo', 'mes', 'año', 'diario', 'semanal', 'mensual'];
    const tieneLimitesTiempo = palabrasTemporales.some(p => reqLower.includes(p));
    const tieneFrecuencia = ['cada', 'por', 'durante'].some(f => reqLower.includes(f));
    
    const keywords = palabrasTemporales.filter(p => reqLower.includes(p));
    const score = (tieneLimitesTiempo ? 60 : 0) + (tieneFrecuencia ? 40 : 0);
    
    return {
      score,
      feedback: score >= 70 ? 'Define límites temporales claros' : 'Especifica cuándo o con qué frecuencia',
      keywords
    };
  };

  const generarSugerencias = (analysis: SmartAnalysis): string[] => {
    const sugerencias = [];
    
    if (analysis.specific.score < 70) {
      sugerencias.push('Añade un verbo de acción claro (debe permitir, debe gestionar, etc.)');
    }
    if (analysis.measurable.score < 70) {
      sugerencias.push('Incluye números específicos o métricas (ej: "hasta 10 usuarios", "en 3 segundos")');
    }
    if (analysis.achievable.score < 70) {
      sugerencias.push('Evita términos absolutos y asegúrate de que sea técnicamente viable');
    }
    if (analysis.relevant.score < 70) {
      sugerencias.push('Explica el propósito o beneficio del requisito');
    }
    if (analysis.timeBound.score < 70) {
      sugerencias.push('Añade límites temporales o frecuencia (ej: "por día", "cada hora")');
    }
    
    return sugerencias;
  };

  const getColorByScore = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getIconByScore = (score: number) => {
    if (score >= 80) return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
    if (score >= 60) return <InformationCircleIcon className="w-5 h-5 text-yellow-500" />;
    return <XCircleIcon className="w-5 h-5 text-red-500" />;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Validador de Requisitos SMART
        </h3>
        <p className="text-gray-600 text-sm">
          Analiza si tu requisito cumple los criterios SMART: Específico, Medible, Alcanzable, Relevante y Temporal.
        </p>
      </div>

      {/* Ejemplos */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Ejemplos de referencia:</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {ejemplos.map((ejemplo) => (
            <button
              key={ejemplo.id}
              onClick={() => {
                setRequisito(ejemplo.texto);
                setEjemploActivo(ejemplo.id);
                analizarRequisito(ejemplo.texto);
              }}
              className={`p-3 rounded-lg border-2 text-left transition-all ${
                ejemploActivo === ejemplo.id 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`text-xs font-semibold mb-1 ${
                ejemplo.color === 'green' ? 'text-green-600' :
                ejemplo.color === 'yellow' ? 'text-yellow-600' :
                'text-red-600'
              }`}>
                Ejemplo {ejemplo.tipo}
              </div>
              <div className="text-sm text-gray-700 line-clamp-2">
                {ejemplo.texto}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Input del requisito */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Escribe tu requisito:
        </label>
        <textarea
          value={requisito}
          onChange={(e) => setRequisito(e.target.value)}
          placeholder="Ej: El sistema debe permitir a cada usuario crear hasta 10 informes por día..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows={3}
        />
        <button
          onClick={() => analizarRequisito(requisito)}
          disabled={!requisito.trim()}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Analizar Requisito
        </button>
      </div>

      {/* Resultados del análisis */}
      {analysis && (
        <div className="space-y-6">
          {/* Puntuación general */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-lg font-semibold text-gray-900">Puntuación SMART</h4>
              <div className={`text-2xl font-bold ${getColorByScore(analysis.overall)}`}>
                {Math.round(analysis.overall)}%
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className={`h-3 rounded-full transition-all duration-500 ${
                  analysis.overall >= 80 ? 'bg-green-500' :
                  analysis.overall >= 60 ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${analysis.overall}%` }}
              />
            </div>
          </div>

          {/* Análisis por criterio */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { key: 'specific', label: 'Específico', data: analysis.specific },
              { key: 'measurable', label: 'Medible', data: analysis.measurable },
              { key: 'achievable', label: 'Alcanzable', data: analysis.achievable },
              { key: 'relevant', label: 'Relevante', data: analysis.relevant },
              { key: 'timeBound', label: 'Temporal', data: analysis.timeBound }
            ].map((criterion) => (
              <div key={criterion.key} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-gray-900">{criterion.label}</h5>
                  {getIconByScore(criterion.data.score)}
                </div>
                <div className={`text-2xl font-bold mb-2 ${getColorByScore(criterion.data.score)}`}>
                  {criterion.data.score}%
                </div>
                <p className="text-xs text-gray-600 mb-2">{criterion.data.feedback}</p>
                {criterion.data.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {criterion.data.keywords.map((kw, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sugerencias de mejora */}
          {analysis.suggestions.length > 0 && (
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-3">Sugerencias de mejora:</h4>
              <ul className="space-y-2">
                {analysis.suggestions.map((sugerencia, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-sm text-blue-800">{sugerencia}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
