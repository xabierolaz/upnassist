@echo off
title UpnAssist - Quick Deployment Script
echo ========================================
echo    DESPLIEGUE OPTIMIZADO A GITHUB
echo ========================================
echo.

cd /d "%~dp0"

echo [1/3] Verificando integridad (Tests)...
call npm run test:run
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Los tests fallaron. Abortando despliegue para proteger la rama main.
    pause
    exit /b 1
)

echo [2/3] Construyendo la aplicación (Build)...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] La compilación falló. Revisa los errores de TypeScript/Vite.
    pause
    exit /b 1
)

echo [3/3] Sincronizando con GitHub...
git add .
set /p commit_msg="Introduce mensaje del commit (Enter para default): "
if "%commit_msg%"=="" set commit_msg="Update: Visual Debugger & Stability Improvements %date% %time%"

git commit -m "%commit_msg%"
git push origin main

echo.
echo ========================================
echo    DESPLIEGUE COMPLETADO CON EXITO
echo ========================================
echo Vercel iniciará el despliegue automáticamente en breve.
echo.
pause
