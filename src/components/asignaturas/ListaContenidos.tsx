import { DocumentIcon, FolderIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

export interface ContenidoItem {
  id: string;
  titulo: string;
  tipo: 'tema' | 'practica' | 'documento' | 'carpeta';
  descripcion?: string;
  estado?: 'disponible' | 'proximamente' | 'completado';
  fecha?: string;
  archivos?: ContenidoItem[];
  onClick?: () => void;
}

interface ListaContenidosProps {
  items: ContenidoItem[];
  titulo?: string;
}

export default function ListaContenidos({ items, titulo }: ListaContenidosProps) {
  const getIcono = (tipo: ContenidoItem['tipo']) => {
    switch (tipo) {
      case 'tema':
        return <DocumentIcon className="w-5 h-5" />;
      case 'practica':
        return <DocumentIcon className="w-5 h-5" />;
      case 'documento':
        return <DocumentIcon className="w-5 h-5" />;
      case 'carpeta':
        return <FolderIcon className="w-5 h-5" />;
    }
  };

  const getEstadoIcon = (estado?: ContenidoItem['estado']) => {
    switch (estado) {
      case 'completado':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case 'proximamente':
        return <ClockIcon className="w-5 h-5 text-gray-400" />;
      default:
        return null;
    }
  };

  const getEstadoColor = (estado?: ContenidoItem['estado']) => {
    switch (estado) {
      case 'completado':
        return 'bg-green-50 hover:bg-green-100';
      case 'proximamente':
        return 'bg-gray-50 opacity-60 cursor-not-allowed';
      default:
        return 'bg-white hover:bg-gray-50';
    }
  };

  return (
    <div className="space-y-4">
      {titulo && (
        <h2 className="text-xl font-semibold text-gray-900 mb-4">{titulo}</h2>
      )}
      
      <div className="grid gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={item.estado !== 'proximamente' ? item.onClick : undefined}
            className={`rounded-lg border p-4 transition-all ${
              getEstadoColor(item.estado)
            } ${
              item.estado !== 'proximamente' && item.onClick 
                ? 'cursor-pointer shadow-sm hover:shadow-md' 
                : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="text-gray-400 mt-0.5">
                  {getIcono(item.tipo)}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-gray-900">
                    {item.titulo}
                  </h3>
                  {item.descripcion && (
                    <p className="text-sm text-gray-600 mt-1">
                      {item.descripcion}
                    </p>
                  )}
                  {item.fecha && (
                    <p className="text-xs text-gray-500 mt-2">
                      {item.fecha}
                    </p>
                  )}
                </div>
              </div>
              {getEstadoIcon(item.estado)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
