/*


$('#header nav .navbar-right li').on('click',function(){
    $('#header nav .navbar-right li').removeClass("active");
    $(this).addClass("active");
});


$(window).scroll(function(){

    var scrollTop= $(window).scrollTop()

    if(scrollTop > 500)
    {
        $('#header nav').css({
            background:'#fff',
            width:'100%',
            boxShadow: '0px 1px 3px #ccc'
        })
        $('#header nav a').css({
            color:'#333'
        })
    }
    else
    {
        $('#header nav').css({
            background:'none',
            width:'100%',
            boxShadow: 'none'
        })
        $('#header nav a').css({
            color:'#fff'
        })
    }

});


/!*加滚动事件*!/
/!*
$('#header nav .navbar-right li').eq(0).on('click',function(){
    $('html,body').animate({scrollTop:0})
});
$('#header nav .navbar-right li').eq(1).on('click',function(){
    $('html,body').animate({scrollTop:$('#hw-fw').offset().top});
});
$('#header nav .navbar-right li').eq(2).on('click',function(){
    $('html,body').animate({scrollTop:$('#hw-tese').offset().top});
});
$('#header nav .navbar-right li').eq(3).on('click',function(){
    $('html,body').animate({scrollTop:$('#hw-sj').offset().top});
});
$('#header nav .navbar-right li').eq(4).on('click',function(){
    $('html,body').animate({scrollTop:$('#hw-date').offset().top});
});
$('#header nav .navbar-right li').eq(5).on('click',function(){
    $('html,body').animate({scrollTop:$('#hw-date1').offset().top});
});
*!/


/!*轮播*!/

//$('.carousel').carousel()

//a.)点击 $('.carousel') 获取clientX
//b.)移动后获取滑动后的 clientX
//3.)$('.carousel').carousel()

var starX,starM;

$('.carousel').on('touchstart',function(e){
    console.log(e.originalEvent.touches[0].clientX);
    starX=e.originalEvent.touches[0].clientX;
});

$('.carousel').on('touchmove',function (e) {
    //console.log(e.originalEvent.touches[0].clientX);
    starM=e.originalEvent.touches[0].clientX;
});

$('.carousel').on('touchend',function(){
    console.log(starX > starM ? '→' : '←');

    if(Math.abs(starX - starM) >= 80)
    {
        $('.carousel').carousel(starX > starM ? 'next' : 'prev')
    }

});

*/
