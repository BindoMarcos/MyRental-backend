# Stage 1: Build the TypeScript application
FROM node:18-alpine AS builder

WORKDIR /myrental-backend

# Copia los archivos de configuración y dependencias
COPY package.json ./
COPY tsconfig.json ./

# Instala dependencias y compila el código TypeScript
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Create the production image
FROM node:18-alpine

WORKDIR /myrental-backend

# Copia solo los archivos necesarios de la etapa de construcción
COPY --from=builder /myrental-backend/package.json ./
COPY --from=builder /myrental-backend/node_modules ./node_modules

# Expone el puerto del backend
EXPOSE 3000

# Define el comando para iniciar el servidor
CMD ["node", "src/app.js"]