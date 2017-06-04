
var current=0;
setInterval(function() {
    current= $(document).width();//当前屏幕的宽度
    if (current > 641)  //pc
    {
        $("#banner .img2000_01").attr("src","images/slide_01_2000x410.jpg");
        $("#banner .img2000_02").attr("src","images/slide_02_2000x410.jpg");
        $("#banner .img2000_03").attr("src","images/slide_03_2000x410.jpg");
    }
    else if(current < 640) // 手机
    {
        $("#banner .img2000_01").attr("src","images/slide_01_640x340.jpg");
        $("#banner .img2000_02").attr("src","images/slide_02_640x340.jpg");
        $("#banner .img2000_03").attr("src","images/slide_03_640x340.jpg");
    };
},500);
$("#wjs-ty .progress").on("mouseover",function () {
    $(this).tooltip('show');
});
$("#wjs-ty .panel-default > .panel-heading:odd").css("background","#2681c5");
$("#wjs-ty .panel-default > .panel-heading .ps-dw:odd").css("background","#ffffff");

var aLiWidth=0;

$("#wjs-tab .wapapp > .nav-tabs li").each(function (index,element) {
    aLiWidth += element.clientWidth;
});
$("#wjs-tab .wapapp > .nav-tabs").css("width",aLiWidth+"px");


$("#wjs_hh .nav-stacked li").on("click",function(){
   $("#wjs_hh .topTit").text($(this).data("titnew"));
});



