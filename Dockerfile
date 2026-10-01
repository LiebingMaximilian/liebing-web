# syntax=docker/dockerfile:1

# ---- Build stage: runs natively on the CI machine (fast), output is platform-independent ----
FROM --platform=$BUILDPLATFORM node:22-alpine AS build
WORKDIR /app
ENV NG_CLI_ANALYTICS=false
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npx ng build --configuration production

# ---- Runtime stage: tiny nginx image that only serves the static files ----
FROM nginx:stable-alpine
LABEL app=liebing-web
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/liebing-web/browser /usr/share/nginx/html
EXPOSE 80
