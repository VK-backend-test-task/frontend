FROM node:18-alpine
WORKDIR /frontend
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
CMD ["yarn", "start"]
