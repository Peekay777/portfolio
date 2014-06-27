$(document).ready(function() {
	onResize();
	
	$(window).resize(onResize);
	
	$("#projects > div").mouseover(function () {
		$(this).find(".project-inner").fadeIn();
	});
	
	$("#projects > div").mouseleave(function () {
		$(this).find(".project-inner").fadeOut();
	});
});

var onResize = function () {
	$("#about").css("height", $(window).height());
	$("#projects").css("height", $(window).height());
}