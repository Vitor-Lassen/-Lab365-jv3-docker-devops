FROM node:22.21

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 5173

# CMD ["npm", "run", "dev"]

CMD ["sh", "-c", "npm i && npm run dev"]

