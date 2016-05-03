## split-handle

### 1.怎么调用
依赖于jquery
```javascript
$.splitHandle({
  dragLine: $('.drag-line'),
  direction: 'x'//某人y轴方向拖动
});
```
require调用，也是直接调用splitHandle方法

###2.参数
> *  debug:默认false，关闭debug模式
> *  dragLine:拖动条jquery对象
> *  direction:拖动方向，默认沿y轴方向

###3.其他
支持单独调用，或者x,y轴一起调用
