/**
 * author: jinweigang
 * date: 2016-04-29
 * 1.拖动改变容器大小,支持上下、左右拖动改变大小
 * 2.支持amd调用和jquery直接调用
 */

 (function(factory){
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else {
        factory(jQuery);
    }
}(function($, undefined){

  var DRAGGING       = false;
  var CACHE_OPTION_X = null;
  var CACHE_OPTION_Y = null;
  var WRAP_H         = null;
  var WRAP_W         = null;

  var action = {
    /**
     * @function x
     * @description 延x轴方向拖动
     */
    x: function(e, option){
      var mouseX = e.pageX,
          offsetLeft = option.wrap.offset().left;
      if(option.debug) console.log('mouseX',mouseX);
      if(mouseX- offsetLeft> 5){
        var first_w = mouseX - offsetLeft;
        option.dragLine.css('left', mouseX - 5 - offsetLeft);
        option.prev.width(first_w);
        option.next.width(WRAP_W - first_w);
        if(option.debug) console.log('prev:width',first_w);
        if(option.debug) console.log('next:width',WRAP_W - first_w);
      } else {
        //不出边界
        option.dragLine.css('left', 0);
      }
      if(mouseX > (WRAP_W-5)) {
        //不出边界
        option.dragLine.css('left', WRAP_W);
        option.prev.width(option.dragLine.offset().left - offsetLeft +15);
        option.next.width(0);
      }
    },

    /**
     * @function y
     * @description 延y轴方向拖动
     */
    y: function(e, option){
      var mouseY = e.pageY,
          offsetTop = option.wrap.offset().top;
      if(option.debug) console.log('mouseY',mouseY);
      if(mouseY-offsetTop > 5){
        var first_h = mouseY - offsetTop;
        option.dragLine.css('top', mouseY - 5 - offsetTop);
        option.prev.height(first_h);
        option.next.height(WRAP_H - first_h);
        if(option.debug) console.log('prev:height',first_h);
        if(option.debug) console.log('next:height',WRAP_H - first_h);
      } else {
        //不出边界
        option.dragLine.css('top', 0);
      }
      if(mouseY > (WRAP_H-5)) {
        //不出边界
        option.dragLine.css('top', WRAP_H);
        option.prev.height(option.dragLine.offset().top - offsetTop +15);
        option.decond.height(0);
      }
    },

    /**
     * @function offMouse
     * @description 解绑非当前wrap的mouse事件
     * @param {direction}
     */
    offMouse: function(direction){
      if(WRAP_H && WRAP_W && direction=='x'){
        CACHE_OPTION_Y.wrap.off();
      } else {
        CACHE_OPTION_X.wrap.off();
      }
    },

    /**
     * @function onMouse
     * @description 重新绑定mouse事件
     * @param {direction}
     */
    onMouse: function(direction){
      if(WRAP_H && WRAP_W && direction=='x'){
        listener(CACHE_OPTION_Y);
      } else {
        listener(CACHE_OPTION_X);
      }
    }
  };

  /**
   * @function mouse
   * @description 鼠标相关事件监听
   * @param {option} 外部传参
   */
  var listener = function(option){
    option.dragLine.off('mousedown').on('mousedown',function(e){
      DRAGGING = true;
      action.offMouse(option.direction);
      if(option.debug) console.log('mousedown',DRAGGING);
      if(option.debug) console.log('=====================');
    });
    option.wrap.off('mousemove').on('mousemove', function(e) {
      e.preventDefault();
      if (!DRAGGING) return;
      action[option.direction](e,option);
      if(option.debug) console.log('---------------------');
      if(option.debug) console.log('mousemove',DRAGGING);
    })
    .off('mouseup').on('mouseup',function(e){
      DRAGGING = false;
      action.onMouse(option.direction);
      if(option.debug) console.log('=====================');
      if(option.debug) console.log('mouseup',DRAGGING);
    });
  };

  /**
   * @function splitHandle
   * @description 暴露外部调用接口
   * @param {option} 外部传参
   */
  $.splitHandle = function(_option){
    var option = $.extend({
      debug: false,
      dragLine: null,
      direction: 'y',//默认上下
    }, _option);

    option.wrap = option.dragLine.parent();
    option.prev = option.dragLine.prev();
    option.next = option.dragLine.next();
    if (option.direction=='x') {
      CACHE_OPTION_X = option;
      WRAP_W = option.wrap.width();
    } else {
      CACHE_OPTION_Y = option;
      WRAP_H = option.wrap.height();
    }
    listener(option);
  };

  return {splitHandle: $.splitHandle};
}));
