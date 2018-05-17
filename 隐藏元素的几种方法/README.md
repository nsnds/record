# 隐藏元素的几种方法

### display: none

页面不渲染该元素，会触发页面的重绘和回流。

### opacity: 0

页面会渲染该元素，opacity只是改变元素的透明度，事件依然可以交互，且影响子元素的透明度。

### visibility: hidden

页面会渲染该元素，visibility改变元素的透明度，事件不能交互，且影响子元素的透明度。

### rgba(x, y, z, 0)

rgba不会改变子元素的透明度