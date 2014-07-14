//constant for end of amination check
var animEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

$(document).ready(function() {
	onResize();
	$(window).resize(onResize); //on browser size change
});

//resizes elements
var onResize = function () {
	var winHieght = $(window).height();
	
	if (winHieght > 300) {
		$("#projects").css("height", winHieght-52);
	}
}
