# HTTP缓存优化配置node实践

# 运行
运行方法：命令行中输入`node app.js`

### 强缓存配置
- Cache-Control
- Expires

> 注意：
> - 在验证时：
>   - Chrome浏览器上刷新页面http://localhost:8080/view.png，没有触发缓存
>     - 原因：Chrome浏览器上刷新页面时，会在request header上设置`Cache-Control: max-age=0`
>   - 解决方法：
>     - 法1：新增一个index.html将图片嵌入，访问该html，刷新该html页面
>     - 法2：打开一个新页面，从地址栏输入图片链接，访问

### 协商缓存配置
- Last-Modified/If-Modified-Since
- Etag/If-None-Match