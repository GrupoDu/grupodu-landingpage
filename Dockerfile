FROM node:25-alpine AS base

WORKDIR /app

COPY . .

FROM base AS dev
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM base AS prod
RUN npm install
RUN npm run build
EXPOSE 3001
CMD ["npm", "run", "start"]