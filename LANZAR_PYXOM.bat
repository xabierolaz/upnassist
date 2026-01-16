@echo off
title Pyxom MOOC - Lanzamiento Rapido
echo ========================================
echo    INICIANDO PLATAFORMA PYXOM (MOOC)
echo ========================================
echo.

cd /d "%~dp0"

:: Iniciar el servidor dev en una nueva ventana minimizada o segundo plano
echo [1/2] Arrancando servidor local...
start /b cmd /c "npm run dev"

:: Esperar a que Vite este listo
echo Esperando a que cargue el entorno...
timeout /t 5 > nul

echo [2/2] Abriendo el Curso MOOC...
:: Intentamos abrir en el puerto 5173 (default)
start http://localhost:5173/mooc
:: Por si acaso el puerto estaba ocupado y se abrio en el 5174 (como paso antes)
start http://localhost:5174/mooc

echo.
echo ========================================
echo    SISTEMA LISTO
echo ========================================
echo Puedes cerrar esta ventana cuando termines.
echo.
pause