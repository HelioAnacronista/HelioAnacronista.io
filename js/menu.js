$('.btn').click(function() {
    $(this).toggleClass('click');
    $('.sidebar').toggleClass('show');
;			});
$('nav > ul > li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});