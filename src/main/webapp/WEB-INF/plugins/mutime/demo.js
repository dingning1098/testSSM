/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */



/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/
//获取浏览器类型
var ua = navigator.userAgent;
//对象
var os = {}
var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
if (android) os.android = true, os.version = android[2];
if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.');

//测试
//alert(android);
//alert(iphone);
if (os.android==true || os.ios == true){
  document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
      dotColor: '#fedd00',
      lineColor: '#fedd00'
    });
//    var intro = document.getElementById('intro');
//    intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
  }, false);

}else{
  $('video').show();
}
