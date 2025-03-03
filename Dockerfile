# 1️⃣ Usar Node.js para construir la app
FROM node:20 AS build
WORKDIR /app

# Copiar archivos y dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto del código y construir la app
COPY . .
RUN npm run build

# 2️⃣ Usar Nginx para servir la app
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
