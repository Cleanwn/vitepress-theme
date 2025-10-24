---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: VitePress
  text: 由 Vite 和 Vue 驱动的静态站点生成器
  tagline: 将 Markdown 变成优雅的文档，只需几分钟
  actions:
    - theme: brand
      text: 什么是 VitePress?
      link: /guide/what-is-vitepress
    - theme: alt
      text: 快速开始
      link: /guide/api-examples
  image:
    src: /logo.svg
    alt: Teek

features:
  - icon: 📝
    title: 专注内容
    details: 只需 Markdown 即可轻松创建美观的文档站点。
  - icon: 🔄
    title: 享受 Vite 无可比拟的体验
    details: 服务器即时启动，闪电般的热更新，还可以使用基于 Vite 生态的插件。
  - icon: 🎼
    title: 使用 Vue 自定义
    details: 直接在 Markdown 中使用 Vue 语法和组件，或者使用 Vue 组件构建自定义主题。
  - icon: 🚀
    title: 速度真的很快！
    details: 采用静态 HTML 实现快速的页面初次加载，使用客户端路由实现快速的页面切换导航。
---

### 项目简介

VitePress 是一个静态站点生成器 (SSG)，专为构建快速、以内容为中心的站点而设计。


### 技术栈

* Vue 3：前端框架，提供响应式 UI
* Vite：快速的前端构建工具
* markdown-it：Markdown 渲染

### 快速构建项目

1. 前置准备：
```bash
npm add -D vitepress@next
```

2. 安装向导：
```bash
npx vitepress init
```

3. 启动项目：
```bash
npm run docs:dev
```

4. 构建项目
```bash
npm run docs:build
```

### 下一步
1. 想要进一步了解 Markdown 文件是怎么映射到对应的 HTML，请继续阅读[路由指南]。
2. 要了解有关可以在页面上执行的操作的更多信息，例如编写 Markdown 内容或使用 Vue 组件，请参见指南的“编写”部分。一个很好的起点是了解 [Markdown 扩展]。
3. 要探索默认文档主题提供的功能，请查看[默认主题配置参考]。
4. 如果想进一步自定义站点的外观，参见[扩展默认主题]或者[构建自定义主题]。
5. 文档成形以后，务必阅读[部署指南]。