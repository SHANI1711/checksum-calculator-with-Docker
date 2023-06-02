FROM node:19-alpine
WORKDIR /home/app2
COPY ./index.js ./package.json /
EXPOSE 5001
RUN npm install
CMD ["npm", "start"]