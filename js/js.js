function b(){
	h = $(window).height();
	t = $(document).scrollTop();
	if(t > h){
		$('#gotop').fadeIn();
	}else{
		$('#gotop').fadeOut();
	}
}
$(document).ready(function(e) {
	b();
	$('#gotop').click(function(){
		$(document).scrollTop(0);	
	})
});
$(window).scroll(function(e){
	b();		
})
