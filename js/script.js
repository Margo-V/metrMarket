
$(document).ready(function() {
    $(".menuToggle").click(function() {
    $(this).toggleClass("active");
    $('.menu-b').slideToggle(300, function(){
        if($(this).css('display') === "none"){
        $(this).removeAttr('style');
        }
    });
    });

});
// $(function () {
//     $('.menu-burger').click(function() {
//         // $('.menu-collapse').toggleClass('d-none').css('order', '1');
//         $('.menu__list').toggleClass('menu-opened');
//     });

// });