@echo off
echo ==========================================
echo 1. Compilando PDF (LaTeX)...
echo ==========================================

pdflatex -interaction=nonstopmode introduccion.tex
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Fallo en pdflatex. Revisa introduccion.log.
    pause
    exit /b %errorlevel%
)

echo.
echo ==========================================
echo 2. Sincronizando HTML (Reveal.js)...
echo ==========================================
python sync_slides.py
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Fallo en el script de Python.
    pause
    exit /b %errorlevel%
)

echo.
echo ==========================================
echo PROCESO COMPLETADO
echo - PDF generado: introduccion.pdf
echo - HTML actualizado: presentacion.html
echo ==========================================
pause