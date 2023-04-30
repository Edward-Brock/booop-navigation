# booop navigation

booop navigation 开源练手导航，前端使用 Vue.js / Vite 进行构建，服务端使用 Express 进行构建。

`src` 文件夹为前端相关工程，`server` 文件夹为服务端相关工程。

服务端可以采用 Docker 进行部署。

该工程存在文件层级不正确的问题，后期需要进行调整重写。

## 使用技术

### 前端

- [Vue 3](https://cn.vuejs.org/)
- [Vite](https://cn.vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Element Plus](https://element-plus.gitee.io/zh-CN/)
- [Axios](https://axios-http.com/)
- [mitt.js](https://github.com/developit/mitt)
- [VueUse](https://vueuse.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### 服务端

- [Express](https://expressjs.com/)

## 项目安装及运行

### 项目安装

```shell
npm install
```

### 项目前端运行

```shell
vite < or > npm run dev
```

### 项目服务端运行

#### 项目调试、本地运行

```shell
cd .\server\
node .\app.js
```

#### 项目上线部署

```shell
docker build -t 镜像名称 .
docker run -d --name 容器名称 -p 3000:3000 --restart=always 镜像名称
```
