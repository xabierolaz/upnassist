# UpnAssist 2026: Sistema de Acceso y Seguimiento

Este proyecto utiliza **Firebase Authentication** para el acceso y **Firestore** para el seguimiento de actividad de los alumnos.

## Requisitos de Configuración (Vercel / Local)

Asegúrate de tener estas variables de entorno configuradas:
```bash
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=upnassist-155b0.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=upnassist-155b0
VITE_FIREBASE_STORAGE_BUCKET=upnassist-155b0.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
VITE_FIREBASE_APP_ID=xxx
```

## Configuración en Firebase Console (OBLIGATORIO)

Para que el seguimiento de alumnos funcione, debes activar la base de datos:

1.  **Activar Firestore:**
    *   Ve a [Firebase Console > Firestore Database](https://console.firebase.google.com/project/upnassist-155b0/firestore).
    *   Haz clic en **Create database**.
    *   Selecciona una ubicación (ej: `europe-west3` para España).
    *   Empieza en **Test mode** (Modo prueba) para que funcione de inmediato.

2.  **Reglas de Seguridad (Opcional pero recomendado):**
    Una vez activado, en la pestaña **Rules**, puedes pegar esto para que solo tú (admin) puedas leer todos los logs, pero todos puedan escribir sus propios logs de entrada:
    ```
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /activity_logs/{log} {
          allow create: if request.auth != null;
          allow read: if request.auth != null && request.auth.token.email == 'xabier.olaz@unavarra.es';
        }
      }
    }
    ```

## Panel de Administrador
Al entrar con `xabier.olaz@unavarra.es`, verás una nueva sección en la página principal llamada **"Consola de Seguimiento"**. 
Desde ahí verás:
*   Nombre del alumno.
*   Número total de veces que ha entrado.
*   Fecha y hora del último acceso.
*   Mini-historial de los últimos 5 días que entró.

## Gestión de Usuarios
Si un alumno olvida su contraseña:
1.  Ve a [Authentication > Users](https://console.firebase.google.com/project/upnassist-155b0/authentication/users).
2.  Busca su correo.
3.  En los tres puntos (⋮), selecciona **Reset password**.