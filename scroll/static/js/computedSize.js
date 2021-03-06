/**
 * 计算页面基础字体
 */
var BASE_FONT_SIZE = 100 * 1;
//视觉稿给出的像素值  /100 得到的是元素的rem值,比如30px的字体,font-size:0.3rem
//@TODO 这只是dpr=2的情况,在dpr=1的手机上字体会变小一倍,这里要多加一些判断的,在dpr=1的情况下 BASE_FONT_SIZE 要 /2
function calculate() {
    var docEl = document.documentElement;
    var clientWidth = docEl.clientWidth;
    if(clientWidth) {
        docEl.style.fontSize = BASE_FONT_SIZE * (clientWidth / 750) + 'px';
    }
}
if(document.addEventListener) { // 不同的情况做兼容
     var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        window.addEventListener(resizeEvt, calculate, false);
        document.addEventListener('DOMContentLoaded', calculate, false);
        calculate();
}
