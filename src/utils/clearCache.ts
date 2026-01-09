// Función utilitaria para limpiar específicamente los datos de UpnAssist
export const clearUpnAssistCache = () => {
  // Lista de todas las claves específicas de UpnAssist
  const upnAssistKeys = [
    // Datos de autenticación
    'upn-chat-active-email',
    'upn-chat-active-displayname',
    'upn-chat-activation-timestamp',
    'upn-chat-is-guest',
    
    // Datos de acceso al chat
    'upn-chat-access-granted',
    'upn-chat-access-timestamp',
    
    // Historial de mensajes
    'upn-chat-messages',
    'upn-private-rooms',
    
    // Datos de calendario
    'upn-calendar-status',
    
    // Datos de perfiles y servicios
    'upn-user-profiles',
    'upn-tutoring-schedules',
    
    // Configuraciones
    'upn-dashboard-settings',
    'upn-ai-settings',
    
    // Claves del sistema anterior (compatibilidad)
    'upn-chat-email',
    'upn-chat-displayname',
    
    // Datos de desarrollo
    'upn-dev-cleaned'
  ];
  
  // Eliminar de localStorage
  upnAssistKeys.forEach(key => {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
      }
  });
  
  // Eliminar de sessionStorage
  upnAssistKeys.forEach(key => {
    if (sessionStorage.getItem(key)) {
      sessionStorage.removeItem(key);
      }
  });
  
  // Recargar la página para reiniciar la aplicación limpia
  window.location.reload();
};
