@echo off
title INICIANDO PYXOM...
cd /d "%~dp0"

:: 1. Verifica si hay que instalar (solo la primera vez o si falta algo)
if not exist "node_modules" (
    echo [INFO] Instalando dependencias necesarias...
    call npm install >nul 2>&1
)

:: 2. Mata procesos viejos por si acaso (limpieza silenciosa)
taskkill /f /im node.exe >nul 2>&1

:: 3. Lanza el servidor minimizado (para que no moleste)
echo [INFO] Arrancando sistema...
start /min cmd /c "npm run dev"

:: 4. Espera 2 segundos y abre la web
timeout /t 2 >nul
start http://localhost:5173

:: 5. Se cierra solo
exit