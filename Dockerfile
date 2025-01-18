# =========================
# STAGE 1: Build react app
# =========================
FROM node:20.11.1-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

# =========================
# STAGE 1: Serve react app
# =========================
FROM node:20.11.1-alpine

WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist .

EXPOSE 3000

ENTRYPOINT ["start-container"]

CMD ["serve", "-s", ".", "-l", "3000"]
