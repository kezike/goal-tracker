FROM node:10.10.0
MAINTAINER Kayode Ezike <kezike13@gmail.com>
ENV WRK_DIR_CTNR="/opt"
WORKDIR ${WRK_DIR_CTNR}
COPY ./src ./src
COPY ./bin ./bin
COPY package*.json ./
RUN npm install
COPY . .
ENV APP_PORT=3000
EXPOSE ${APP_PORT}
CMD ["npm", "start"]
