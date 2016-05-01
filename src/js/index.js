$(function(){
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
});
