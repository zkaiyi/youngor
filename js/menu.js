// 计算全屏高度
var facility_H=$(window).height() ;
var nav_Top = sessionStorage.getItem("font-size") * 1.19;
var footer_H = $(".footer-contaiern").height() + sessionStorage.getItem("font-size") * 0.65;
$(".main-container").css("height",facility_H -nav_Top - 2 -footer_H + "px" );
// 轮播
var swiper = new Swiper('.swiper-container', {
    // slidesPerView: 1.2,--12.13修改
    slidesPerView: 1.3,
    spaceBetween: 15,
    centeredSlides: true,
    // autoplay:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});



