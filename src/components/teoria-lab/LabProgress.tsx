import { useTeoriaLabStore } from '../../stores/teoriaLabStore';
import { CheckCircleIcon, ClockIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function LabProgress() {
  const { completedActivities, totalTimeSpent } = useTeoriaLabStore();
  
  // Calcular estadísticas
  const completedTools = Object.values(completedActivities).filter(p => p.completed).length;
  const averageScore = completedTools > 0
    ? Object.values(completedActivities).reduce((acc, p) => acc + p.score, 0) / completedTools
    : 0;
  const overallProgress = completedTools > 0 ? (completedTools / 10) * 100 : 0; // Asumiendo 10 herramientas totales

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    if (hours > 0) {
      return `${hours}h ${remainingMinutes}min`;
    }
    return `${minutes} min`;
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-blue-500';
    if (percentage >= 40) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <AcademicCapIcon className="w-6 h-6 text-purple-600" />
          Tu Progreso en el Laboratorio
        </h3>
        {overallProgress === 100 && (
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            ¡Completado! 🎉
          </span>
        )}
      </div>

      {/* Barra de progreso general */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progreso general</span>
          <span className="font-medium">{overallProgress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(overallProgress)}`}
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-3 bg-purple-50 rounded-lg">
          <CheckCircleIcon className="w-8 h-8 text-purple-600 mx-auto mb-1" />
          <div className="text-2xl font-bold text-gray-900">{completedTools}</div>
          <div className="text-xs text-gray-600">Herramientas completadas</div>
        </div>
        
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <ClockIcon className="w-8 h-8 text-blue-600 mx-auto mb-1" />
          <div className="text-2xl font-bold text-gray-900">{formatTime(totalTimeSpent)}</div>
          <div className="text-xs text-gray-600">Tiempo total</div>
        </div>
        
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <div className="text-3xl mb-1">⭐</div>
          <div className="text-2xl font-bold text-gray-900">{averageScore.toFixed(0)}%</div>
          <div className="text-xs text-gray-600">Puntuación media</div>
        </div>
      </div>

      {/* Logros desbloqueados */}
      {completedTools >= 3 && (
        <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
          <h4 className="text-sm font-semibold text-yellow-900 mb-2">🏆 Logros desbloqueados</h4>
          <div className="space-y-1">
            {completedTools >= 3 && (
              <div className="text-xs text-yellow-800">• Explorador: 3 herramientas completadas</div>
            )}
            {completedTools >= 5 && (
              <div className="text-xs text-yellow-800">• Investigador: 5 herramientas completadas</div>
            )}
            {completedTools >= 7 && (
              <div className="text-xs text-yellow-800">• Experto: 7 herramientas completadas</div>
            )}
            {completedTools === 9 && (
              <div className="text-xs text-yellow-800">• Maestro del Laboratorio: ¡Todas completadas!</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
