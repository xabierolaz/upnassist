import React, { useState, useEffect } from 'react';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { CodeEditor } from '../pyxom/core/CodeEditor';

interface UMLClass {
  id: string;
  name: string;
  x: number;
  y: number;
  attributes: string[];
  methods: string[];
  isAbstract?: boolean;
  isInterface?: boolean;
}

interface UMLRelation {
  id: string;
  from: string;
  to: string;
  type: 'inheritance' | 'implementation' | 'association' | 'dependency';
}

export default function UMLLiveEditor() {
  const [classes, setClasses] = useState<UMLClass[]>([
    {
      id: '1',
      name: 'Animal',
      x: 50,
      y: 50,
      attributes: ['name: String', 'age: int'],
      methods: ['eat(): void', 'sleep(): void'],
      isAbstract: true
    },
    {
      id: '2',
      name: 'Dog',
      x: 50,
      y: 250,
      attributes: ['breed: String'],
      methods: ['bark(): void', 'wagTail(): void']
    }
  ]);
  
  const [relations, setRelations] = useState<UMLRelation[]>([
    { id: 'r1', from: '2', to: '1', type: 'inheritance' }
  ]);
  
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [javaCode, setJavaCode] = useState('');
  const [isDragging, setIsDragging] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  
  const isCompleted = false;


  // Generar código Java cuando cambian las clases o relaciones
  useEffect(() => {
    generateJavaCode();
  }, [classes, relations]);

  const generateJavaCode = () => {
    let code = '// Código Java generado automáticamente desde UML\n\n';
    
    // Generar cada clase
    classes.forEach(umlClass => {
      // Modificadores
      if (umlClass.isInterface) {
        code += `public interface ${umlClass.name} {\n`;
      } else {
        const modifiers = umlClass.isAbstract ? 'public abstract class' : 'public class';
        code += `${modifiers} ${umlClass.name}`;
        
        // Buscar herencia
        const inheritance = relations.find(r => 
          r.from === umlClass.id && r.type === 'inheritance'
        );
        if (inheritance) {
          const parentClass = classes.find(c => c.id === inheritance.to);
          if (parentClass) {
            code += ` extends ${parentClass.name}`;
          }
        }
        
        // Buscar implementaciones
        const implementations = relations.filter(r => 
          r.from === umlClass.id && r.type === 'implementation'
        );
        if (implementations.length > 0) {
          const interfaces = implementations
            .map(impl => classes.find(c => c.id === impl.to)?.name)
            .filter(Boolean)
            .join(', ');
          code += ` implements ${interfaces}`;
        }
        
        code += ' {\n';
      }
      
      // Atributos
      if (umlClass.attributes.length > 0 && !umlClass.isInterface) {
        code += '    // Atributos\n';
        umlClass.attributes.forEach(attr => {
          const [name, type] = attr.split(':').map(s => s.trim());
          code += `    private ${type || 'Object'} ${name};\n`;
        });
        code += '\n';
      }
      
      // Constructor (solo para clases concretas)
      if (!umlClass.isAbstract && !umlClass.isInterface && umlClass.attributes.length > 0) {
        code += `    // Constructor\n`;
        code += `    public ${umlClass.name}(`;
        const params = umlClass.attributes.map(attr => {
          const [name, type] = attr.split(':').map(s => s.trim());
          return `${type || 'Object'} ${name}`;
        }).join(', ');
        code += params + ') {\n';
        
        umlClass.attributes.forEach(attr => {
          const [name] = attr.split(':').map(s => s.trim());
          code += `        this.${name} = ${name};\n`;
        });
        code += '    }\n\n';
        
        // Getters y Setters
        code += '    // Getters y Setters\n';
        umlClass.attributes.forEach(attr => {
          const [name, type] = attr.split(':').map(s => s.trim());
          const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
          
          // Getter
          code += `    public ${type || 'Object'} get${capitalizedName}() {\n`;
          code += `        return ${name};\n`;
          code += '    }\n\n';
          
          // Setter
          code += `    public void set${capitalizedName}(${type || 'Object'} ${name}) {\n`;
          code += `        this.${name} = ${name};\n`;
          code += '    }\n\n';
        });
      }
      
      // Métodos
      if (umlClass.methods.length > 0) {
        code += '    // Métodos\n';
        umlClass.methods.forEach(method => {
          const isAbstractMethod = umlClass.isAbstract || umlClass.isInterface;
          const methodSignature = `    public ${method}`;
          
          if (isAbstractMethod) {
            code += methodSignature + ';\n';
          } else {
            code += methodSignature + ' {\n';
            code += '        // TODO: Implementar método\n';
            if (method.includes('void')) {
              code += '    }\n';
            } else {
              code += '        return null;\n    }\n';
            }
          }
        });
      }
      
      code += '}\n\n';
    });
    
    setJavaCode(code.trim());
    
    // Completar si ha creado al menos 3 clases con relaciones
    if (!isCompleted && classes.length >= 3 && relations.length >= 2) {
      // completeTool('uml-editor', 100);
    }
  };
  const handleMouseDown = (e: React.MouseEvent, classId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsDragging(classId);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const container = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - container.left - dragOffset.x;
      const y = e.clientY - container.top - dragOffset.y;
      
      setClasses(prev => prev.map(c => 
        c.id === isDragging ? { ...c, x, y } : c
      ));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  const addClass = () => {
    const newClass: UMLClass = {
      id: Date.now().toString(),
      name: `NewClass${classes.length + 1}`,
      x: 300,
      y: 100,
      attributes: [],
      methods: []
    };
    setClasses([...classes, newClass]);
  };

  const updateClass = (id: string, updates: Partial<UMLClass>) => {
    setClasses(prev => prev.map(c => 
      c.id === id ? { ...c, ...updates } : c
    ));
  };

  const deleteClass = (id: string) => {
    setClasses(prev => prev.filter(c => c.id !== id));
    setRelations(prev => prev.filter(r => r.from !== id && r.to !== id));
  };

  // const addRelation = (from: string, to: string, type: UMLRelation['type']) => {
  //   const newRelation: UMLRelation = {
  //     id: Date.now().toString(),
  //     from,
  //     to,
  //     type
  //   };
  //   setRelations([...relations, newRelation]);
  // };

  const drawRelation = (relation: UMLRelation) => {
    const fromClass = classes.find(c => c.id === relation.from);
    const toClass = classes.find(c => c.id === relation.to);
    
    if (!fromClass || !toClass) return null;
    
    const x1 = fromClass.x + 100;
    const y1 = fromClass.y + 50;
    const x2 = toClass.x + 100;
    const y2 = toClass.y + 50;
    
    const getArrowPath = () => {
      switch (relation.type) {
        case 'inheritance':
          return 'M 0,0 L -10,-5 L -10,5 Z'; // Triángulo vacío
        case 'implementation':
          return 'M 0,0 L -10,-5 L -10,5 Z'; // Triángulo vacío (punteado)
        case 'association':
          return 'M 0,0 L -10,-5 M 0,0 L -10,5'; // Flecha simple
        case 'dependency':
          return 'M 0,0 L -10,-5 M 0,0 L -10,5'; // Flecha simple (punteado)
      }
    };
    
    const strokeDasharray = relation.type === 'implementation' || relation.type === 'dependency' 
      ? '5,5' : 'none';
    
    return (
      <g key={relation.id}>
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#666"
          strokeWidth="2"
          strokeDasharray={strokeDasharray}
        />
        <g transform={`translate(${x2},${y2}) rotate(${Math.atan2(y2-y1, x2-x1) * 180 / Math.PI})`}>
          <path d={getArrowPath()} fill="none" stroke="#666" strokeWidth="2" />
        </g>
      </g>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          UML Live Editor
        </h3>
        <p className="text-gray-600 text-sm">
          Crea diagramas UML y genera código Java automáticamente. Arrastra las clases para moverlas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Canvas UML */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-700">Diagrama UML</h4>
            <button
              onClick={addClass}
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center gap-1 text-sm"
            >
              <PlusIcon className="w-4 h-4" />
              Añadir Clase
            </button>
          </div>
          
          <div 
            className="relative bg-gray-50 border-2 border-gray-300 rounded-lg h-[600px] overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* SVG para las relaciones */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {relations.map(drawRelation)}
            </svg>
            
            {/* Clases UML */}
            {classes.map(umlClass => (
              <div
                key={umlClass.id}
                className={`absolute bg-white border-2 rounded cursor-move shadow-md ${
                  selectedClass === umlClass.id ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-400'
                } ${umlClass.isInterface ? 'border-dashed' : ''}`}
                style={{ left: umlClass.x, top: umlClass.y, width: '200px' }}
                onMouseDown={(e) => handleMouseDown(e, umlClass.id)}
                onClick={() => setSelectedClass(umlClass.id)}
              >
                {/* Header */}
                <div className={`px-3 py-2 border-b ${
                  umlClass.isInterface ? 'bg-purple-100' : 
                  umlClass.isAbstract ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      {umlClass.isInterface && <span className="text-purple-600">«interface»<br/></span>}
                      {umlClass.isAbstract && <span className="text-blue-600 italic">abstract<br/></span>}
                      <span className="font-semibold">{umlClass.name}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteClass(umlClass.id);
                      }}
                      className="text-red-500 hover:text-red-700"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Atributos */}
                {umlClass.attributes.length > 0 && (
                  <div className="px-3 py-2 border-b text-xs">
                    {umlClass.attributes.map((attr, idx) => (
                      <div key={idx}>- {attr}</div>
                    ))}
                  </div>
                )}
                
                {/* Métodos */}
                {umlClass.methods.length > 0 && (
                  <div className="px-3 py-2 text-xs">
                    {umlClass.methods.map((method, idx) => (
                      <div key={idx}>+ {method}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Panel de edición */}
          {selectedClass && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h5 className="font-semibold text-gray-700 mb-2">Editar Clase</h5>
              <div className="space-y-2">
                <input
                  type="text"
                  value={classes.find(c => c.id === selectedClass)?.name || ''}
                  onChange={(e) => updateClass(selectedClass, { name: e.target.value })}
                  className="w-full px-2 py-1 border rounded text-sm"
                  placeholder="Nombre de la clase"
                />
                
                <div className="flex gap-2">
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      checked={classes.find(c => c.id === selectedClass)?.isAbstract || false}
                      onChange={(e) => updateClass(selectedClass, { isAbstract: e.target.checked, isInterface: false })}
                      className="mr-1"
                    />
                    Abstract
                  </label>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      checked={classes.find(c => c.id === selectedClass)?.isInterface || false}
                      onChange={(e) => updateClass(selectedClass, { isInterface: e.target.checked, isAbstract: false })}
                      className="mr-1"
                    />
                    Interface
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Código Java generado */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Código Java Generado</h4>
          <div className="border border-gray-300 rounded-lg overflow-hidden h-[600px]">
            <CodeEditor
              value={javaCode}
              onChange={() => {}} // Solo lectura
              language="java"
              readOnly={true}
            />
          </div>
        </div>
      </div>

      {/* Instrucciones */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <h5 className="font-semibold text-blue-900 mb-2">Cómo usar</h5>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Click en "Añadir Clase" para crear nuevas clases</li>
            <li>• Arrastra las clases para moverlas</li>
            <li>• Click en una clase para editarla</li>
            <li>• El código Java se genera automáticamente</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-4">
          <h5 className="font-semibold text-purple-900 mb-2">Tipos de UML</h5>
          <ul className="text-sm text-purple-800 space-y-1">
            <li>• <strong>Clase</strong>: Rectángulo normal</li>
            <li>• <strong>Abstract</strong>: Fondo azul, texto italic</li>
            <li>• <strong>Interface</strong>: Fondo púrpura, borde punteado</li>
            <li>• Relaciones próximamente...</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
