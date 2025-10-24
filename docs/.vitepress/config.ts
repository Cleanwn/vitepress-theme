import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "VitePress",
  description: "由 Vite 和 Vue 驱动的静态站点生成器",
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg', // 顶部 logo
    nav: [
      { text: '首页', link: '/' },
      { text: '使用文档', link: '/guide/what-is-vitepress' }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '什么是 VitePress?', link: '/guide/what-is-vitepress' },
          { text: '快速开始', link: '/guide/getting-started' },
          { text: 'API示例', link: '/guide/api-examples' }
        ]
      },
      {
        items: [
          {
            text: '进阶示例',    // 二级菜单
            items: [
              { text: '自定义组件', link: '/guide/what-is-vitepress' },
              { text: '主题扩展', link: '/guide/api-examples' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cleanwn' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024-present'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    outline: {
      label: '页面导航'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    // 搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
  }
})
