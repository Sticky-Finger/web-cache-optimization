# 运行
运行方法：命令行中输入`node app.js`

### v0.3 强缓存配置
- 验证：
  - Chrome浏览器上刷新页面http://localhost:8080/view.png，没有触发缓存
    - 原因：Chrome浏览器上刷新页面时，会在request header上设置`Cache-Control: max-age=0`
  - 解决方法：
    - 法1：新增一个index.html将图片嵌入，访问该html，刷新该html页面
    - 法2：打开一个新页面，从地址栏输入图片链接，访问