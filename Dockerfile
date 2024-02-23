FROM node:alpine as builder

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY src src
COPY public public
COPY tsconfig.json tsconfig.json
COPY vite.config.ts vite.config.ts
COPY tailwind.config.cjs tailwind.config.cjs
COPY tsconfig.node.json tsconfig.node.json 
COPY index.html index.html
COPY postcss.config.cjs postcss.config.cjs

RUN yarn run build

FROM nginx:1.16.0-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

#RUN rm /etc/nginx/conf.d/default.conf

#COPY deploy/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
