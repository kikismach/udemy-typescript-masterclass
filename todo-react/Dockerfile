# Usa la imagen oficial de Node.js como base
FROM node:22.12.0-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json (si lo tienes)
COPY package*.json ./

# Install bash -- Remove this
RUN apk update && apk add bash

# Instala las dependencias del proyecto
RUN npm install

# Instala las dependencias del servidor -- helps you serve a static site, single page application or just a static file
RUN npm i -g serve

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Compilar el código Typescript a Javascript
RUN npm run build

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD [ "serve", "-s", "dist" ]
