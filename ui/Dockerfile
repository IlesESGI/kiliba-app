# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
COPY ./ui/ .
COPY .env .
RUN npm install
RUN npm run build
# production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
