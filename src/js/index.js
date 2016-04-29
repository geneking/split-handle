$(function(){
  $.splitHandle({
    wrap: $('.main-content'),
    prev: $('.tree'),
    next: $('.preview'),
    dragLine: $('.drag-line'),
    direction: 'x'
  });

  /*$.splitHandle({
    wrap: $('.main'),
    prev: $('.main-content'),
    next: $('.edit'),
    dragLine: $('.drag-line2')
  });*/
});
