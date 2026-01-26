# UpnAssist 2026: Sistema de Acceso Restringido

Este proyecto utiliza un sistema de **Lista Blanca (Whitelist)** combinada con **Firebase Authentication** para garantizar que solo los alumnos autorizados puedan acceder al contenido.

## Características del Sistema
1.  **Whitelist Estricta:** Solo los correos en `src/config/authWhitelist.ts` pueden registrarse o iniciar sesión.
2.  **Auto-Registro:** La primera vez que un alumno entra, introduce su correo UPNA y **elige su propia contraseña**.
3.  **Roles:** El correo `xabier.olaz@unavarra.es` tiene automáticamente el rol `admin` y acceso a un panel de control.
4.  **Recuperación Manual:** Si un alumno olvida su contraseña, el sistema le dirige a contactar con el profesor para un reset manual en el panel de Firebase.

## Requisitos de Configuración (Vercel / Local)

Debes configurar las siguientes variables de entorno en Vercel (Settings > Environment Variables) o en tu archivo `.env.local`:

```bash
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=upnassist-155b0.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=upnassist-155b0
VITE_FIREBASE_STORAGE_BUCKET=upnassist-155b0.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
VITE_FIREBASE_APP_ID=xxx
```

## Cómo resetear una contraseña (Admin)
Como administrador, si un alumno te escribe porque ha olvidado su contraseña:
1.  Ve a la [Consola de Firebase](https://console.firebase.google.com/project/upnassist-155b0/authentication/users).
2.  Busca el correo del alumno.
3.  Haz clic en los tres puntos (⋮) y selecciona **Reset password** (enviará un email automático) o **Change password** (para ponérsela tú manualmente).

## Estructura de Archivos Auth
- `src/config/authWhitelist.ts`: Contiene la lista de emails permitidos.
- `src/stores/authStore.ts`: Lógica de autenticación y estado global (Zustand).
- `src/core/firebase.ts`: Inicialización del SDK de Firebase.
- `src/pages/LoginPage.tsx`: Interfaz de login y registro restringido.
- `src/App.tsx`: Protección de rutas mediante el componente `ProtectedRoute`.

## Lista de Alumnos Actualizada (Ene 2026)
La lista completa de los ~114 correos autorizados ya está integrada en el código fuente. Para añadir o quitar alumnos, edita `src/config/authWhitelist.ts`.
