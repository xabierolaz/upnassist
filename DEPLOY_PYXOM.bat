@echo off
title UpnAssist - Deployment Script
echo ========================================
echo    INICIANDO DEPLOY A GITHUB
echo ========================================
echo.

cd /d "%~dp0"

echo [1/4] Limpiando archivos temporales...
if exist "node_modules" (
    echo Eliminando node_modules...
    rmdir /s /q "node_modules"
)

if exist "dist" (
    echo Eliminando dist...
    rmdir /s /q "dist"
)

echo [2/4] Instalando dependencias...
npm install

echo [3/4] Construyendo la aplicación...
npm run build

echo [4/4] Preparando para despliegue...
echo.
echo === COMPROBACIONES FINALES ===
echo.
echo Verificando que el directorio dist se haya creado...
if exist "dist" (
    echo [OK] Directorio dist creado correctamente
) else (
    echo [ERROR] No se pudo crear el directorio dist
    pause
    exit /b 1
)

echo.
echo === DEPLOY A GITHUB ===
echo.
echo Asegurándose de que el repositorio esté configurado...
git add .
git commit -m "Deployment build: %date% %time%"
git push origin main

echo.
echo === DEPLOY A VERCEL ===
echo.
echo El despliegue a Vercel se realizará automáticamente desde GitHub.
echo Si estás usando Vercel CLI, ejecuta: vercel --prod

echo.
echo ========================================
echo    DEPLOY COMPLETADO
echo ========================================
echo Puedes cerrar esta ventana.
echo.
pause