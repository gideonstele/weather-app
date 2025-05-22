# 7日天气预报

此项目是基于 [Vite](https://vitejs.dev/) 和 [React](https://react.dev/) 构建的。它会显示7日天气预报。

## 技术栈

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://tanstack.com/query/latest/docs/framework/react/react-query)

## 调用 API

- [和风天气](https://dev.qweather.com/docs/api/weather/weather-daily/)

## Dev 启动

### 启动前项目准备

访问和风天气，注册账号，获取 API Key，会获得当前API的域名与API Token。

```bash
cp .env.example .env.local
```

将获取的 API Key 填入 `.env.local` 文件中。
将域名在 vite.config.ts 的target中替换。

### 启动项目

```bash
pnpm dev
```

## Build

```bash
pnpm build
```
