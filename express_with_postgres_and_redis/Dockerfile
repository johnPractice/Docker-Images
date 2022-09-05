FROM node:16
COPY ./package.json .
RUN npm i --only=production
RUN npm i typescript ts-node
COPY . .
EXPOSE 8001
CMD [ "npm", "run","start" ]
