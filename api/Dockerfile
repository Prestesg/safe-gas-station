FROM node:latest as api

WORKDIR /app

COPY ./src ./src
COPY ./.env ./.env
COPY ./nest-cli.json ./nest-cli.json
COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json

#DEV PROPOUSES
COPY ./node_modules ./node_modules
#COPY ./package-lock.json ./package-lock.json

RUN npm install --loglevel verbose
RUN npm run build