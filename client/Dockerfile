FROM node:16

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

ENV PATH /app/node_modules/.bin:$PATH

CMD ["npm", "run", "dev"]
