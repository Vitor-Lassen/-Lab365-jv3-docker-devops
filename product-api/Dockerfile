FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npx prisma generate && npx prisma migrate deploy && npm run prisma:seed && npm run dev"]