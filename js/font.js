// // font-size
// window.onload = function(){
//     /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
//       为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
//     getRem(750,100)
// };
// window.onresize = function(){
//     getRem(750,100)
// };
// function getRem(pwidth,prem){
//     var html = document.getElementsByTagName("html")[0];
//     var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
//     html.style.fontSize = oWidth/pwidth*prem + "px";
//     sessionStorage.setItem("font-size",oWidth/pwidth*prem);
// }


// “()()”表示自执行函数
(function (doc, win) {
    var docEl = doc.documentElement,
        // 手机旋转事件,大部分手机浏览器都支持 onorientationchange 如果不支持，可以使用原始的 resize
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            //clientWidth: 获取对象可见内容的宽度，不包括滚动条，不包括边框
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100*(clientWidth / 750) + 'px';
        };

    recalc();
    //判断是否支持监听事件 ，不支持则停止
    if (!doc.addEventListener) return;
    //注册翻转事件
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);
