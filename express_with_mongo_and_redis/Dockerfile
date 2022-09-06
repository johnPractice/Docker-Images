FROM node:16
COPY ./package.json .
RUN npm i --only=production
# if use type script
# RUN npm i typescript 
COPY . .
EXPOSE 3000
CMD [ "npm", "run","start" ]
