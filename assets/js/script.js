$(function(){
    let btn = $("#btn");
    btn.click(function () {
        if ($(".text").hasClass("de-active")) {
            $(".text").slideDown();
            $(".text").removeClass("de-active");
            $(".icon").attr("src","https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-up-arrows-those-icons-fill-those-icons-5.png")
        }
        else{
            $(".text").slideUp();
            $(".text").addClass("de-active");
            $(".icon").attr("src","https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-down-arrows-those-icons-fill-those-icons-6.png")
        }
    })
})
