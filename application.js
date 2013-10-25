$(document).ready(function(){
	$("#B, #B2, #H, #H2, .arrowL, .arrowL2, .arrowR, #C, #C2").hide();

	$(".images").mouseenter(function(){
  		$(".arrowL, #Main, #first, #B, #B2").toggle();
	}); 
	
	$(".images").mouseleave(function(){
		$(".arrowL, #Main, #first, #B, #B2").toggle();
	});

	$(".images1").mouseenter(function(){
  		$(".arrowL2, #Main, #first, #H, #H2").toggle();
	}); 
	
	$(".images1").mouseleave(function(){
		$(".arrowL2, #Main, #first, #H, #H2").toggle();
	});

	$(".images2").mouseenter(function(){
  		$(".arrowR, #Main, #first, #C, #C2").toggle();
	}); 
	
	$(".images2").mouseleave(function(){
		$(".arrowR, #Main, #first, #C, #C2").toggle();
	});
});