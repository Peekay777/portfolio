$(document).ready(function() {
	onResize();	//initialises
	$(window).resize(onResize); //on browser size change
	
	
	
	$(".project").mouseover(function () {
		$(this).children(".p-inner").fadeIn();
	})
	.mouseleave(function () {
		$(this).children(".p-inner").fadeOut(200);
	})
	.mousedown(function() {
		$(this).parent().fadeOut(600);
		$("#project-details").fadeIn(600);
	});
	
	
	
	$(".back").mousedown(function() {
		$("#project-details").fadeOut(600);
		$("#projects").fadeIn(600);
	});
});

//resizes elements
var onResize = function () {
	$("#projects").css("height", $(window).height() * 0.95);
	$("header").css("height", $(window).height() * 0.05);
}