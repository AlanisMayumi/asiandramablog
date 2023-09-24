FROM node:18-alpine

WORKDIR /asian-drama-blog

COPY ./package.json /asian-drama-blog

RUN npm install

COPY . . 

CMD npm start