    $(document).ready(function(){
        $('#word').focus();
    });
   
   $(document).ready(function() {
   (function($){
        $.fn.slider=function(arg){
            var me = $(this),opt = $.extend({inteval:5000,auto:true,loop:false,prev:me.find(".prev"),next:me.find(".next"),pageBtns:"",finish:function(){},start:function(){}}, arg),pageBtns,scrollable = me.find(".scrollable"),ori_items = me.find(".items"),total_num = me.find(".item").length,cur_page = 0,mov_w = me.find(".item").outerWidth(),move_left=0,interval;
            opt.start();
            if (opt.loop) {
                ori_items.append(ori_items.find(".item").clone());
                ori_items.prepend(ori_items.find(".item").clone());
                scrollable.scrollLeft(getCurScroLeft());
            }
           opt.prev.length&&opt.prev.bind("click",move).hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")});
           opt.next.length&&opt.next.bind("click",move).hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")});
           if(opt.auto){
               interval=setInterval(move,opt.inteval);
               me.hover(function(){clearInterval(interval)},function(){interval=setInterval(move,opt.inteval);move_left=0});
           }
           if(opt.pageBtns&&!opt.loop){
               pageBtns=opt.pageBtns;
               pageBtns.bind("click",moveTo);
           }
           function moveTo(e){
                pageBtns.unbind("click",moveTo);
                var cur_li=$(e.target).closest("li"),num=cur_li.index();
                pageBtns.removeClass("select");cur_li.addClass("select");
                var cur_scrollLeft=num*mov_w;
                scrollable.animate({scrollLeft:cur_scrollLeft},{duration:'normal',easing:'swing',complete:function(){pageBtns.bind("click",moveTo);opt.finish(num)},queue:false});
           }
           function move(e){
              opt.prev.length&&opt.prev.unbind("click",move);
              opt.next.length&&opt.next.unbind("click",move);
              if(e){
                  clearInterval(interval);
                  var cur_btn=$(e.target);
                  if(cur_btn.hasClass("prev")){move_left=1};
                  if(cur_btn.hasClass("next")){move_left=0};
              }
               var cur_scrollLeft=move_left ? getCurScroLeft()-mov_w:getCurScroLeft()+mov_w;
               scrollable.stop().animate({scrollLeft:cur_scrollLeft},{duration:'normal',easing:'swing',complete:complate,queue:false});
           }
           function complate(){
               cur_page=move_left?cur_page-1:cur_page+1;
               if(cur_page<= -total_num+2){cur_page+=total_num;resetscroll()}
               if(cur_page>=2*total_num-2){cur_page-=total_num;resetscroll()}
               opt.prev.length&&opt.prev.bind("click",move);
               opt.next.length&&opt.next.bind("click",move);
               opt.finish();
           }
           function resetscroll(){
               scrollable.scrollLeft(getCurScroLeft());
           }
           function getCurScroLeft(){
               return opt.loop?total_num * mov_w+cur_page*mov_w:cur_page*mov_w;
           }
        }
    })(jQuery);
    $("#banner-slide").slider({
        interval:5000,
        loop:true,
        auto:true
    });
     $("#ex-app-wrapper").slider({
        interval:5000,
        loop:false,
        auto:false,
        pageBtns:$("#op-page-list li")
    });
  /*  $("#banner-slide .item").hover(function(){$(this).find(".info-wrapper").animate({'top':190},{duration:300,queue:false})},function(){$(this).find(".info-wrapper").animate({'top':266},{duration:300,queue:false})});*/

});



    /**
     * jQuery jslides 1.1.0
     *
     * http://www.cactussoft.cn
     *
     * Copyright (c) 2009 - 2013 Jerry
     *
     * Dual licensed under the MIT and GPL licenses:
     *   http://www.opensource.org/licenses/mit-license.php
     *   http://www.gnu.org/licenses/gpl.html
     */
    $(function(){
        var numpic = $('#slide li').size()-1;
        var nownow = 0;
        var inout = 0;
        var TT = 0;
        var SPEED = 5000;


        $('#slide li').eq(0).siblings('li').css({'display':'none'});


        var ulstart = '<ul id="pagination">',
            ulcontent = '',
            ulend = '</ul>';
        ADDLI();
        var pagination = $('#pagination li');
        var paginationwidth = $('#pagination').width();
        $('#pagination').css('margin-left',(50-paginationwidth))

        pagination.eq(0).addClass('current')

        function ADDLI(){
            //var lilicount = numpic + 1;
            for(var i = 0; i <= numpic; i++){
                ulcontent += '<li>' + '<a href="#">' + (i+1) + '</a>' + '</li>';
            }

            $('#slide').after(ulstart + ulcontent + ulend);
        }

        pagination.on('click',DOTCHANGE)

        function DOTCHANGE(){

            var changenow = $(this).index();

            $('#slide li').eq(nownow).css('z-index','900');
            $('#slide li').eq(changenow).css({'z-index':'800'}).show();
            pagination.eq(changenow).addClass('current').siblings('li').removeClass('current');
            $('#slide li').eq(nownow).fadeOut(400,function(){$('#slide li').eq(changenow).fadeIn(500);});
            nownow = changenow;
        }

        pagination.mouseenter(function(){
            inout = 1;
        })

        pagination.mouseleave(function(){
            inout = 0;
        })

        function GOGO(){

            var NN = nownow+1;

            if( inout == 1 ){
            } else {
                if(nownow < numpic){
                    $('#slide li').eq(nownow).css('z-index','900');
                    $('#slide li').eq(NN).css({'z-index':'800'}).show();
                    pagination.eq(NN).addClass('current').siblings('li').removeClass('current');
                    $('#slide li').eq(nownow).fadeOut(400,function(){$('#slide li').eq(NN).fadeIn(500);});
                    nownow += 1;

                }else{
                    NN = 0;
                    $('#slide li').eq(nownow).css('z-index','900');
                    $('#slide li').eq(NN).stop(true,true).css({'z-index':'800'}).show();
                    $('#slide li').eq(nownow).fadeOut(400,function(){$('#slide li').eq(0).fadeIn(500);});
                    pagination.eq(NN).addClass('current').siblings('li').removeClass('current');

                    nownow=0;

                }
            }
            TT = setTimeout(GOGO, SPEED);
        }

        TT = setTimeout(GOGO, SPEED);

    })





    function b(){
        h = $(window).height();
        t = $(document).scrollTop();
        if(t > h){
            $('#top').fadeIn();
        }else{
            $('#top').fadeOut();
        }
    }
    $(document).ready(function(e) {
        b();
        $('#top').click(function(){
            $(document).scrollTop(0);
        })
    });
    $(window).scroll(function(e){
        b();
    })
