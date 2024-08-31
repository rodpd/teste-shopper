# syntax=docker/dockerfile:1

FROM node:20-alpine

COPY . .
RUN npm install
RUN npm uninstall -g typescript
RUN npm install -g typescript
RUN tsc -p tsconfig.json
CMD ["node", "dist/server.js"]
EXPOSE 3000