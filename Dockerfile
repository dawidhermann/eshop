FROM node:16.4.2-slim as development
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install --production=false
COPY . .
RUN yarn build

FROM node:16.4.2-slim as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install --production=true
COPY --from=development /usr/src/app/dist ./dist
CMD ["node", "dist/main"]