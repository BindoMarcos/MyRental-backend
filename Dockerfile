# ------------------
# ETAPA 1: BUILDER (Instala dependencias y compila TypeScript)
# ------------------
FROM node:20-slim as builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración de dependencias
COPY package.json ./

# Instala TODAS las dependencias (incluyendo las de desarrollo para la compilación)
# Asegúrate de que todas tus dependencias de runtime estén en la sección "dependencies"
RUN npm install

# Copia el código fuente del proyecto
COPY . .

# Compila el código TypeScript a JavaScript (Output: /app/dist)
# Se asume que 'npm run build' genera el código final en esta carpeta.
RUN npm run build

# ------------------
# ETAPA 2: PRODUCCIÓN (Ejecuta la API - Imagen final ligera)
# ------------------
FROM node:20-slim as production

# Establece el directorio de trabajo
WORKDIR /

# Copia ÚNICAMENTE los archivos de configuración de dependencias
COPY package.json ./

# Instala SOLO las dependencias de producción (crea /app/node_modules)
# Esto garantiza que el motor de Node.js encuentre los módulos de Express, TypeORM, etc.
RUN npm install

# Copia el código JavaScript compilado desde la etapa 'builder' a /app/dist
COPY --from=builder /app/dist ./dist

# FIX CRÍTICO: Copia el archivo .env para que 'dotenv' lo pueda leer en runtime.
# Si tu archivo se llama diferente o está en otra ubicación, ajusta esta línea.
COPY .env .env

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación. Ejecuta el archivo compilado: /app/dist/app.js
CMD ["node", "dist/app.js"]