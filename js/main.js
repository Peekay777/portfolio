$(document).ready(function() {
	onResize();	//initialises
	$(window).resize(onResize); //on browser size change
	
	
	
	$(".project").mouseover(function () {
		$(this).children(".p-inner").show();
		//$(this).children(".p-inner").css("background", "rgba(0,0,0,0.7)");
	})
	.mouseleave(function () {
		$(this).children(".p-inner").hide();
	});
	
});

//resizes elements
var onResize = function () {
	$("#projects").css("height", $(window).height() * 0.95);
	$("header").css("height", $(window).height() * 0.05);
}