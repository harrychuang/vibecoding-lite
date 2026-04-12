# Monorepo root: Zeabur / Docker 預設建置脈絡為倉庫根目錄，必須在此提供 Dockerfile，
# 否則 zbpack 會改用內建「靜態站 + Caddy」流程（出現 COPY --from=output → /usr/share/caddy），
# 與 Next.js Node 執行時不符。路徑前綴為 frontend/，等同於 frontend/Dockerfile。
FROM node:22-alpine AS builder
WORKDIR /src

COPY frontend/package.json frontend/package-lock.json ./
COPY frontend/product/package.json ./product/
COPY frontend/storybook/package.json ./storybook/

RUN npm ci

COPY frontend/product/ ./product/
COPY frontend/storybook/ ./storybook/

RUN npm run build --workspace=product

# 建置日誌中應看見此行；若仍出現 COPY --from=output → caddy，代表未使用本 Dockerfile。
RUN echo "vibe-coding-lite: Next.js product build done (Node runtime image, not Caddy static)"

FROM node:22-alpine
WORKDIR /src

COPY --from=builder /src/package.json ./
COPY --from=builder /src/node_modules ./node_modules
COPY --from=builder /src/product/package.json ./product/
COPY --from=builder /src/product/node_modules ./product/node_modules
COPY --from=builder /src/product/.next ./product/.next
COPY --from=builder /src/product/public ./product/public
COPY --from=builder /src/storybook/package.json ./storybook/
COPY --from=builder /src/storybook/src ./storybook/src

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080
CMD ["npm", "run", "start", "--workspace=product"]
