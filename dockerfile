FROM node:11-slim

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

ENV NODE_ENV production
ENV PORT=80

CMD ["node","/app/dist/index.js"]

EXPOSE 80
