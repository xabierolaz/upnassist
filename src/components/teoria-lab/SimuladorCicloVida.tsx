import React, { useState, useEffect } from 'react';
import { PlayIcon, PauseIcon, ArrowPathIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface ProjectPhase {
  name: string;
  duration: number;
  progress: number;
  bugs: number;
  cost: number;
}

interface ProjectSimulation {
  methodology: 'waterfall' | 'agile';
  phases: ProjectPhase[];
  currentPhase: number;
  totalBugs: number;
  totalCost: number;
  totalTime: number;
  customerSatisfaction: number;
  isRunning: boolean;
}

export default function SimuladorCicloVida() {
  const [waterfall, setWaterfall] = useState<ProjectSimulation>({
    methodology: 'waterfall',
    phases: [
      { name: 'Requisitos', duration: 30, progress: 0, bugs: 0, cost: 0 },
      { name: 'Diseño', duration: 25, progress: 0, bugs: 0, cost: 0 },
      { name: 'Implementación', duration: 40, progress: 0, bugs: 0, cost: 0 },
      { name: 'Pruebas', duration: 20, progress: 0, bugs: 0, cost: 0 },
      { name: 'Despliegue', duration: 10, progress: 0, bugs: 0, cost: 0 }
    ],
    currentPhase: 0,
    totalBugs: 0,
    totalCost: 0,
    totalTime: 0,
    customerSatisfaction: 100,
    isRunning: false
  });

  const [agile, setAgile] = useState<ProjectSimulation>({
    methodology: 'agile',
    phases: [
      { name: 'Sprint 1', duration: 14, progress: 0, bugs: 0, cost: 0 },
      { name: 'Sprint 2', duration: 14, progress: 0, bugs: 0, cost: 0 },
      { name: 'Sprint 3', duration: 14, progress: 0, bugs: 0, cost: 0 },
      { name: 'Sprint 4', duration: 14, progress: 0, bugs: 0, cost: 0 },
      { name: 'Sprint 5', duration: 14, progress: 0, bugs: 0, cost: 0 }
    ],
    currentPhase: 0,
    totalBugs: 0,
    totalCost: 0,
    totalTime: 0,
    customerSatisfaction: 100,
    isRunning: false
  });

  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (waterfall.isRunning || agile.isRunning) {
      interval = setInterval(() => {
        if (waterfall.isRunning) {
          updateSimulation(waterfall, setWaterfall);
        }
        if (agile.isRunning) {
          updateSimulation(agile, setAgile);
        }
      }, 100);
    }

    return () => clearInterval(interval);
  }, [waterfall.isRunning, agile.isRunning]);

  const updateSimulation = (
    _sim: ProjectSimulation, 
    setSim: React.Dispatch<React.SetStateAction<ProjectSimulation>>
  ) => {
    setSim(prev => {
      const newSim = { ...prev };
      const currentPhase = newSim.phases[newSim.currentPhase];

      if (!currentPhase || currentPhase.progress >= 100) {
        // Mover a la siguiente fase
        if (newSim.currentPhase < newSim.phases.length - 1) {
          newSim.currentPhase++;
        } else {
          // Proyecto completado
          newSim.isRunning = false;
          setShowResults(true);
          return newSim;
        }
      } else {
        // Actualizar progreso
        currentPhase.progress += 2;
        newSim.totalTime += 0.5;
        currentPhase.cost += 100;
        newSim.totalCost += 100;

        // Inyectar bugs según la metodología
        if (newSim.methodology === 'waterfall') {
          // En waterfall, los bugs se acumulan y se detectan tarde
          if (Math.random() < 0.05 && newSim.currentPhase < 3) {
            currentPhase.bugs++;
            newSim.totalBugs++;
          }
          // Bugs detectados en fase de pruebas
          if (newSim.currentPhase === 3 && Math.random() < 0.3) {
            newSim.totalBugs += 2;
            newSim.customerSatisfaction -= 5;
          }
        } else {
          // En ágil, los bugs se detectan y corrigen pronto
          if (Math.random() < 0.1) {
            currentPhase.bugs++;
            newSim.totalBugs++;
            // Corrección inmediata
            if (Math.random() < 0.7) {
              currentPhase.bugs = Math.max(0, currentPhase.bugs - 1);
              newSim.totalBugs = Math.max(0, newSim.totalBugs - 1);
            }
          }
        }

        // Actualizar satisfacción del cliente
        if (newSim.methodology === 'agile' && newSim.currentPhase > 0) {
          // En ágil, el cliente ve progreso constante
          newSim.customerSatisfaction = Math.min(100, newSim.customerSatisfaction + 0.1);
        } else if (newSim.methodology === 'waterfall' && newSim.totalBugs > 5) {
          // En waterfall, la satisfacción baja si hay muchos bugs
          newSim.customerSatisfaction = Math.max(0, newSim.customerSatisfaction - 0.2);
        }
      }

      return newSim;
    });
  };

  const startSimulation = () => {
    setWaterfall(prev => ({ ...prev, isRunning: true }));
    setAgile(prev => ({ ...prev, isRunning: true }));
    setShowResults(false);
  };

  const pauseSimulation = () => {
    setWaterfall(prev => ({ ...prev, isRunning: false }));
    setAgile(prev => ({ ...prev, isRunning: false }));
  };

  const resetSimulation = () => {
    const resetProject = (sim: ProjectSimulation): ProjectSimulation => ({
      ...sim,
      phases: sim.phases.map(p => ({ ...p, progress: 0, bugs: 0, cost: 0 })),
      currentPhase: 0,
      totalBugs: 0,
      totalCost: 0,
      totalTime: 0,
      customerSatisfaction: 100,
      isRunning: false
    });

    setWaterfall(prev => resetProject(prev));
    setAgile(prev => resetProject(prev));
    setShowResults(false);
  };
  const renderMethodology = (sim: ProjectSimulation, title: string, color: string) => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className={`text-xl font-bold mb-4 ${color}`}>{title}</h3>
      
      {/* Fases */}
      <div className="space-y-3 mb-6">
        {sim.phases.map((phase, idx) => (
          <div key={idx} className={`${idx === sim.currentPhase ? 'ring-2 ring-blue-400' : ''} rounded`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{phase.name}</span>
              <span className="text-xs text-gray-500">{phase.duration} días</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx < sim.currentPhase ? 'bg-green-500' :
                  idx === sim.currentPhase ? 'bg-blue-500' :
                  'bg-gray-300'
                }`}
                style={{ width: `${phase.progress}%` }}
              />
            </div>
            {phase.bugs > 0 && (
              <div className="flex items-center mt-1 text-red-600 text-xs">
                <ExclamationTriangleIcon className="w-3 h-3 mr-1" />
                {phase.bugs} bugs
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Métricas */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-gray-50 rounded p-2">
          <div className="text-gray-600">Tiempo</div>
          <div className="font-semibold">{sim.totalTime.toFixed(0)} días</div>
        </div>
        <div className="bg-gray-50 rounded p-2">
          <div className="text-gray-600">Costo</div>
          <div className="font-semibold">${sim.totalCost.toLocaleString()}</div>
        </div>
        <div className="bg-gray-50 rounded p-2">
          <div className="text-gray-600">Bugs totales</div>
          <div className="font-semibold text-red-600">{sim.totalBugs}</div>
        </div>
        <div className="bg-gray-50 rounded p-2">
          <div className="text-gray-600">Satisfacción</div>
          <div className={`font-semibold ${
            sim.customerSatisfaction >= 80 ? 'text-green-600' :
            sim.customerSatisfaction >= 60 ? 'text-yellow-600' :
            'text-red-600'
          }`}>
            {sim.customerSatisfaction.toFixed(0)}%
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Simulador del Ciclo de Vida del Software
        </h3>
        <p className="text-gray-600 text-sm">
          Compara cómo evolucionan los proyectos con metodologías Waterfall vs Ágil. 
          Observa cómo se acumulan bugs, costos y satisfacción del cliente.
        </p>
      </div>

      {/* Controles */}
      <div className="flex justify-center gap-4 mb-6">
        {!waterfall.isRunning && !agile.isRunning ? (
          <button
            onClick={startSimulation}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <PlayIcon className="w-5 h-5" />
            Iniciar Simulación
          </button>
        ) : (
          <button
            onClick={pauseSimulation}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
          >
            <PauseIcon className="w-5 h-5" />
            Pausar
          </button>
        )}
        <button
          onClick={resetSimulation}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <ArrowPathIcon className="w-5 h-5" />
          Reiniciar
        </button>
      </div>

      {/* Simulaciones lado a lado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {renderMethodology(waterfall, 'Metodología Waterfall', 'text-blue-600')}
        {renderMethodology(agile, 'Metodología Ágil', 'text-green-600')}
      </div>

      {/* Resultados comparativos */}
      {showResults && (
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4">Comparación de Resultados</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-blue-600 mb-3">Waterfall</h5>
              <ul className="space-y-2 text-sm">
                <li>⏱️ Tiempo total: {waterfall.totalTime.toFixed(0)} días</li>
                <li>💰 Costo: ${waterfall.totalCost.toLocaleString()}</li>
                <li>🐛 Bugs finales: {waterfall.totalBugs}</li>
                <li>😊 Satisfacción: {waterfall.customerSatisfaction.toFixed(0)}%</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-green-600 mb-3">Ágil</h5>
              <ul className="space-y-2 text-sm">
                <li>⏱️ Tiempo total: {agile.totalTime.toFixed(0)} días</li>
                <li>💰 Costo: ${agile.totalCost.toLocaleString()}</li>
                <li>🐛 Bugs finales: {agile.totalBugs}</li>
                <li>😊 Satisfacción: {agile.customerSatisfaction.toFixed(0)}%</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h5 className="font-semibold text-blue-900 mb-2">Conclusiones</h5>
            <ul className="text-sm text-blue-800 space-y-1">
              {waterfall.totalBugs > agile.totalBugs && (
                <li>• Ágil detectó y corrigió bugs más temprano</li>
              )}
              {waterfall.customerSatisfaction < agile.customerSatisfaction && (
                <li>• La entrega continua en Ágil mantuvo mayor satisfacción del cliente</li>
              )}
              {waterfall.totalTime > agile.totalTime && (
                <li>• Waterfall tomó más tiempo debido a fases secuenciales</li>
              )}
              <li>• Ambas metodologías tienen sus ventajas según el contexto del proyecto</li>
            </ul>
          </div>
        </div>
      )}

      {/* Información educativa */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <h5 className="font-semibold text-blue-900 mb-2">Características Waterfall</h5>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Fases secuenciales estrictas</li>
            <li>• Requisitos definidos al inicio</li>
            <li>• Bugs detectados tarde (costosos)</li>
            <li>• Cliente ve resultado al final</li>
          </ul>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4">
          <h5 className="font-semibold text-green-900 mb-2">Características Ágil</h5>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Iteraciones cortas (sprints)</li>
            <li>• Adaptación continua</li>
            <li>• Detección temprana de bugs</li>
            <li>• Entregas frecuentes al cliente</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
