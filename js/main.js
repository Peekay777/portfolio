var animEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

$(document).ready(function() {
	onResize();	//initialises
	$(window).resize(onResize); //on browser size change
	
	
	// rollover projects
	$(".project").mouseover(function () {
		$(this).children(".p-inner").fadeIn();
	})
	.mouseleave(function () {
		$(this).children(".p-inner").fadeOut(200);
	})
	.mousedown(function() {
		var projectDetails = $("#project-details");
		var details = $(".template .project-details-container").clone();
		projectDetails.empty();
		//
		//fill in details
		//
		projectDetails.append(details);
		
		
		
		
		
		// slideOut projects and slideIn project details
		$("#projects").removeClass("animated slideInLeft").addClass("animated slideOutLeft").one(animEnd, function () {
			$(this).hide().removeClass("animated slideOutLeft");
			projectDetails.removeClass("animated slideOutRight").show().addClass("animated slideInRight").one(animEnd, function() {
				$(this).removeClass("animated slideInRight");
			});
		});
	});
	
	
	// slideOut project details and slideIn projects
	$("#project-details").on("click", ".back", function() {
		$("#project-details").removeClass("animated slideInRight").addClass("animated slideOutRight").one(animEnd, function() {
			$(this).hide().removeClass("animated slideOutRight");
			$("#projects").show().addClass("animated slideInLeft").one(animEnd, function() {
				$(this).removeClass("animated slideInLeft");
			});
		});
	});
});

//resizes elements
var onResize = function () {
	var winHieght = $(window).height();
	
	if (winHieght > 300) {
		$("#projects").css("height", winHieght-52);
		//$("header").css("height", winHieght * 0.05);
		//$("nav div").css("width", winHieght * 0.05);
	}
}

var projDetailCollection = [{
							"World Cup API": [{
								"skills": "HTML, CSS, JavaScript, jQuery, AJAX, JSON",
								"github": "https://github.com/Peekay777/worldcupapihack",
								"link": "http://peekay777.github.io/worldcupapihack/",
								"screeny": "worldcupscreeny.jpg"
							}]
}];