module.exports = {
  title: 'My Record',
  description: '我的一个记录文档',
  base: '/record/',
  port: 3333,
  dest: '.vuepress/dist',
  themeConfig: {
    nav: [
      { text: '博客', link: 'http://nsnds.github.io' }
    ],
    sidebar: [
      ['/隐藏元素的几种方法/', '隐藏元素的几种方法']
    ]
  }
}