@echo off
title Pyxom MOOC - Verificación de Despliegue
echo ========================================
echo    VERIFICANDO CONFIGURACIÓN DE DEPLOY
echo ========================================
echo.

cd /d "%~dp0"

echo [1/3] Verificando dependencias...
npm install --production

echo [2/3] Verificando construcción...
npm run build

echo [3/3] Verificando archivos de despliegue...
if exist "dist" (
    echo [OK] Directorio dist creado correctamente
    echo [OK] Estructura de archivos:
    dir dist
) else (
    echo [ERROR] No se pudo crear el directorio dist
    pause
    exit /b 1
)

echo.
echo ========================================
echo    VERIFICACIÓN COMPLETADA
echo ========================================
echo.
echo El proyecto está listo para desplegar a Vercel.
echo.
echo Para desplegar:
echo 1. Ejecuta DEPLOY_PYXOM.bat o 
echo 2. Usa el comando: npm run deploy
echo.
pause