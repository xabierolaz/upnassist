/**
 * Script para arreglar navegación y botones en UpnAssist
 * Este archivo corrige los botones que no funcionan
 */

// src/utils/navigationFixes.ts

import React from 'react';
import { useNavigate } from 'react-router-dom';

// Manejadores de navegación centralizados
export const useNavigationHandlers = () => {
  const navigate = useNavigate();
  
  return {
    // Navegación a asignaturas
    goToAsignatura: (codigo: string) => {
      navigate(`/upnassist/asignatura/${codigo}`);
    },
    
    goToAsignaturas: () => {
      navigate('/upnassist/asignaturas');
    },
    
    // Herramientas principales
    goToChat: () => {
      navigate('/upnassist/chat');
    },
    
    goToPeerChat: () => {
      navigate('/upnassist/peer-chat');
    },
    
    goToCalendar: () => {
      navigate('/upnassist/calendario');
    },
    
    goToApps: () => {
      navigate('/upnassist/apps');
    },
    
    goToPlagiarismDetector: () => {
      navigate('/upnassist/plagiarism-detector');
    },
    
    goToTeacherGuide: () => {
      navigate('/upnassist/teacher-guide');
    },
    
    goToHelp: () => {
      navigate('/upnassist/help');
    },
    
    goToDashboard: () => {
      navigate('/upnassist/dashboard');
    },
    
    // Enlaces externos UPNA
    openCampusVirtual: () => {
      window.open('https://miaulario.unavarra.es', '_blank');
    },
    
    openEmail: () => {
      window.open('https://outlook.office.com', '_blank');
    },
    
    openMiPortal: () => {
      window.open('https://miportal.unavarra.es', '_blank');
    },
    
    openBiblioteca: () => {
      window.open('https://biblioteca.unavarra.es', '_blank');
    },
    
    // Modales
    openModal: (_modalName: string, setterFunction: (value: boolean) => void) => {
      setterFunction(true);
    },
    
    closeModal: (setterFunction: (value: boolean) => void) => {
      setterFunction(false);
    }
  };
};

// Función helper para verificar si una ruta existe
export const checkRouteExists = (path: string): boolean => {
  const validRoutes = [
    '/upnassist',
    '/upnassist/dashboard',
    '/upnassist/asignaturas',
    '/upnassist/chat',
    '/upnassist/peer-chat',
    '/upnassist/calendario',
    '/upnassist/apps',
    '/upnassist/help',
    '/upnassist/teacher-guide',
    '/upnassist/plagiarism-detector',
    '/upnassist/asignatura/informatica',
    '/upnassist/asignatura/ingenieria-software',
    '/upnassist/asignatura/estructura-datos',
    '/upnassist/asignatura/aaee'
  ];
  
  return validRoutes.includes(path);
};

// Componente wrapper para botones con navegación
export const NavigationButton = ({ 
  to, 
  children, 
  className = '',
  external = false 
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) => {
  // const navigate = useNavigate(); // Not used directly
  const { goToAsignatura, goToChat, goToPeerChat, goToCalendar, goToApps } = useNavigationHandlers();
  
  const handleClick = () => {
    if (external) {
      window.open(to, '_blank');
    } else if (to.includes('asignatura/')) {
      const codigo = to.split('/').pop();
      if (codigo) goToAsignatura(codigo);
    } else {
      // Mapear rutas a funciones
      const routeMap: Record<string, () => void> = {
        '/upnassist/chat': goToChat,
        '/upnassist/peer-chat': goToPeerChat,
        '/upnassist/calendario': goToCalendar,
        '/upnassist/apps': goToApps
      };
      
      const handler = routeMap[to];
      if (handler) handler();
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default useNavigationHandlers;