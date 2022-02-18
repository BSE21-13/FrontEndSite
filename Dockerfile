FROM node:12-slim AS builder

ENV NODE_ENV=production
ENV REACT_APP_BACKEND_URL='https://cadise-api-46vvqxzipa-uc.a.run.app'

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# Install production dependencies
RUN npm install --production

COPY . .

# Build the image for production
RUN npm run build

# Production environment
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]