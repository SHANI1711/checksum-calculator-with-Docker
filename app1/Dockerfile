FROM node:19-alpine
WORKDIR /home/app1
COPY ./index.js ./package.json /
EXPOSE 5000
RUN npm install
CMD ["npm", "start"]