FROM node:20.9.0-alpine

RUN mkdir /home/app/

COPY . /home/app/

WORKDIR /home/app/

RUN npm install

CMD [ "node", "index" ]


