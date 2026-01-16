#!/bin/bash

# Script para desplegar a GitHub y Vercel
echo "=== INICIANDO DEPLOY A GITHUB ==="

# Asegurarse de estar en el directorio correcto
cd "$(dirname "$0")"

# Limpiar archivos temporales
echo "[1/4] Limpiando archivos temporales..."
rm -rf node_modules dist

# Instalar dependencias
echo "[2/4] Instalando dependencias..."
npm install

# Construir la aplicación
echo "[3/4] Construyendo la aplicación..."
npm run build

# Verificar que se haya creado el directorio dist
if [ ! -d "dist" ]; then
    echo "[ERROR] No se pudo crear el directorio dist"
    exit 1
fi

echo "[4/4] Preparando para despliegue..."

# Comprobar si hay cambios para hacer commit
echo "Agregando cambios..."
git add .

# Hacer commit si hay cambios
if ! git diff --cached --quiet; then
    git commit -m "Deployment build: $(date)"
    echo "Cambios commitados"
else
    echo "No hay cambios para commitar"
fi

# Empujar a GitHub
echo "Empujando a GitHub..."
git push origin main

echo "=== DEPLOY A GITHUB COMPLETADO ==="
echo "El despliegue a Vercel se realizará automáticamente desde GitHub."