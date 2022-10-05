# stage 1

FROM node:alpine AS my-app-build
WORKDIR /app

COPY package.json ./
RUN npm i
COPY . .
RUN npm run build

# stage 2

FROM nginx:alpine
COPY --from=my-app-build /app/dist/space-x-exo /usr/share/nginx/html
EXPOSE 80
