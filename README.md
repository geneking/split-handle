## split-handle
----
### 1.怎么调用
依赖于jquery
```javascript
$.splitHandle({
  wrap: $('.main-content'),
  prev: $('.tree'),
  next: $('.preview'),
  dragLine: $('.drag-line'),
  direction: 'x'//某人y轴方向拖动
});

$.splitHandle({
  wrap: $('.main'),
  prev: $('.main-content'),
  next: $('.edit'),
  dragLine: $('.drag-line2')
});
```
require调用，也是直接调用splitHandle方法

###2.参数
> *  wrap:包含两个div及拖动条的父级容器
> *  prev:拖动条前面（左边）的jquery对象
> *  next:拖动条后面（右边）的jquery对象
> *  dragLine:拖动条后面（右边）的jquery对象
> *  direction:拖动方向，默认沿y轴方向

###3.其他
支持单独调用，或者x,y轴一起调用
