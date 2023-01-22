FROM node:lts-alpine3.17 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --omit=dev

FROM nginx:alpine-slim
COPY --from=node /app/dist/angular-crash /usr/share/nginx/html