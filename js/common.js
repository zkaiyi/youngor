

// 菜单滑动
$(document).on("click",".top-nav-fr-",function () {

    $(".content-container").addClass("content-container-add");
    $(".nav-container").addClass("nav-container-add");
    $(".top-nav-fr-img").attr("src","images/close.png");
    $(".top-nav-fr").removeClass("top-nav-fr-").addClass("top-nav-fr-add");
    $(".top-nav-container").addClass("top-nav-container-add");
    setTimeout(function () {
        $(".content-z").removeClass("hide02");
    }, 700);
    document.body.style.overflow='hidden';

});
$(document).on("click",".top-nav-fr-add",function () {
    $(".content-container").removeClass("content-container-add");
    $(".nav-container").removeClass("nav-container-add");
    $(".top-nav-fr-img").attr("src","images/nav-click.png");
    $(".top-nav-fr").removeClass("top-nav-fr-add").addClass("top-nav-fr-");
    $(".top-nav-container").removeClass("top-nav-container-add");
    $(".content-z").addClass("hide02");
    document.body.style.overflow='auto';
});

$(document).on("click",".nav",function () {
   if($(this).hasClass(".nav-active")){

   }else {
       $(this).addClass("nav-active").siblings().removeClass("nav-active");
   }
});


// 底部不足时候
$(".footer-contaiern").css({
    position:"static"
});
function lrFixFooter(obj){
    var footer = $(obj);
    var doc = $(document);
    function fixFooter(){
        //如果document的高度小于等于window的高度，就固定定位
        if(doc.height()-4 <= $(window).height()){
            footer.css({
                width:"100%",
                position:"fixed",
                left:0,
                bottom:0
            });
        }else{
            footer.css({
                position:"static"
            });
        }
    }
    fixFooter();
    $(window).on('resize.footer', function(){
        fixFooter();
    });
    $(window).on('scroll.footer',function(){
        fixFooter();
    });
}