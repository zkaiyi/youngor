// 点击弹出框
$(document).on("click",".ts-send-zz",function () {
    $(".content-container").addClass("content-container-add02");
    $(".container-talents-zz").removeClass("hide");
    $(".container-talents-tck").addClass("container-talents-tck-add");
});
$(document).on("click",".container-talents-zz",function () {
    if($(this).hasClass(".hide")){

    }else {
        $(".content-container").removeClass("content-container-add02");
        $(".container-talents-tck").removeClass("container-talents-tck-add");
        $(this).addClass("hide");
    }
});