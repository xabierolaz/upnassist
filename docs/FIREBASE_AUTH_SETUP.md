# Configuración de Firebase Authentication para UpnAssist

## Configuración Actual
- **Proyecto Firebase**: upnassist-155b0
- **URL del proyecto**: https://console.firebase.google.com/project/upnassist-155b0

## Pasos para Habilitar Emails Reales

### 1. Habilitar Email/Password Authentication
1. Ve a [Firebase Console](https://console.firebase.google.com/project/upnassist-155b0/authentication/providers)
2. En la pestaña **Sign-in method**
3. Habilita **Email/Password**
4. Marca también **Email link (passwordless sign-in)** si lo deseas

### 2. Configurar Plantillas de Email
1. Ve a [Authentication > Templates](https://console.firebase.google.com/project/upnassist-155b0/authentication/emails)
2. Personaliza las siguientes plantillas:
   - **Password reset** - Para recuperación de contraseña
   - **Email address verification** - Para verificación de email
   - **Email address change** - Para cambio de email

### 3. Configurar Dominios Autorizados
1. Ve a [Authentication > Settings](https://console.firebase.google.com/project/upnassist-155b0/authentication/settings)
2. En **Authorized domains**, añade:
   - `localhost` (ya incluido por defecto)
   - `upnassist-155b0.firebaseapp.com` (ya incluido)
   - Tu dominio de producción cuando lo tengas

### 4. Configurar Action URL (Importante)
1. En [Authentication > Templates](https://console.firebase.google.com/project/upnassist-155b0/authentication/emails)
2. Cada plantilla tiene un **Action URL**
3. Por defecto usa: `https://upnassist-155b0.firebaseapp.com/__/auth/action`
4. Para desarrollo local, puedes configurar un custom action handler

### 5. Verificar Cuotas y Límites
Firebase Auth gratuito incluye:
- 10,000 verificaciones de email/mes
- 10,000 emails de password reset/mes
- Ilimitadas autenticaciones

## Prueba de Funcionamiento

### Test con cuda2020 (Admin Backdoor)
```
Email/Usuario: cuda2020
Contraseña: cuda2020
```
Este acceso funciona sin necesidad de Firebase.

### Test con Email Real
1. Usa un email real en formato: `nombre.apellido@unavarra.es`
2. El sistema enviará un email de verificación real
3. Revisa tu bandeja de entrada y spam

## Usuarios Preregistrados
Los siguientes usuarios están preregistrados en el sistema:

### Administradores
- `admin@upna.es`
- `director@unavarra.es`

### Profesores
- `prof.garcia@unavarra.es` - Ingeniería del Software
- `prof.martinez@unavarra.es` - Estructura de Datos
- `prof.lopez@unavarra.es` - AAEE
- `prof.sanchez@unavarra.es` - Informática

### Estudiantes
- `estudiante1@unavarra.es` - 240304, 506108
- `estudiante2@unavarra.es` - 509106, 509102
- `maria.gonzalez@unavarra.es` - 240304, 509106
- `carlos.rodriguez@unavarra.es` - 506108, 509102

## Troubleshooting

### Los emails no llegan
1. Verifica que Email/Password esté habilitado en Firebase Console
2. Revisa la carpeta de spam
3. Verifica que el email esté en la lista de usuarios preregistrados
4. Comprueba los logs en Firebase Console > Authentication > Usage

### Error "auth/invalid-api-key"
1. Verifica que las variables de entorno en `.env` coincidan con Firebase Console
2. Reinicia el servidor de desarrollo

### Error "auth/network-request-failed"
1. Verifica tu conexión a internet
2. Comprueba que no haya un firewall bloqueando Firebase
3. Intenta en modo incógnito

## Notas de Seguridad
- El backdoor `cuda2020` es solo para desarrollo
- En producción, elimina o cambia este backdoor
- Configura reglas de Firestore para proteger los datos de usuarios
- Habilita 2FA para cuentas administrativas

## Enlaces Útiles
- [Firebase Auth Documentation](https://firebase.google.com/docs/auth)
- [Firebase Console](https://console.firebase.google.com/project/upnassist-155b0)
- [Precios de Firebase](https://firebase.google.com/pricing)