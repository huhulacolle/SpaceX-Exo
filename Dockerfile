# stage 1

FROM node:14-slim AS my-app-build
WORKDIR /app

COPY package.json ./
RUN npm i
COPY . .
RUN npm run build:ssr

# stage 2

CMD ["node", "/app/dist/SpaceX-Exo/server/main.js"]
EXPOSE 4000
