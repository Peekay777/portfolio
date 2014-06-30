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
		var projectName = $(this).find("p").text();
		var projectDetails = $("#project-details");
		var details = $(".template .project-details-container").clone();
		
		details.find("h2").text(projectName);
		details.find("#skills").text(projDetailCollection[0][projectName][0].skills);
		details.find("#situation").text(projDetailCollection[0][projectName][0].situation);
		details.find("#task").text(projDetailCollection[0][projectName][0].task);
		details.find("#action").text(projDetailCollection[0][projectName][0].action);
		details.find("#result").text(projDetailCollection[0][projectName][0].result);
		details.find("#project-details-screeny").attr("href", projDetailCollection[0][projectName][0].link);
		details.find("#project-details-screeny").css("background-image", "url(images/" + projDetailCollection[0][projectName][0].screeny + ")");
		details.find("#gitlink").attr("href", projDetailCollection[0][projectName][0].gitlink);
		
		projectDetails.empty();
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
							"World Cup API" : [{
								"skills" : "HTML, CSS, JavaScript, jQuery, AJAX, JSON",
								"situation" : "Find a third-party API to provide an interesting and desirable user experience. The app must respond to the user and return results of AJAX calls.",
								"task" : "The API needed to be contemporary, appealing and a topic that I had knowledge of. The World Cup API, supplied by Kimono Labs, was precisely the interface required for my brief. Designed a user experience by researching the RESTful API to inspire world cup fever and provide useful statistics.",
								"action" : "Followed the MVP (Minimum Viable Product) development project lifecycle; sketched a wireframe, coded up a static version of the prototype, and then added the interactive behaviour.",
								"result" : "This project was showcased by Kimono as an example for their World Cup API.",
								"gitlink" : "https://github.com/Peekay777/worldcupapihack",
								"link" : "http://peekay777.github.io/worldcupapihack/",
								"screeny" : "worldcupscreeny.jpg"
							}],
							"Small Business" : [{
								"skills" : "HTML, CSS",
								"situation" : "A static prototype landing page for a fictitious small business.  Application of key design concepts for user experience (UX) and along with it, user interfaces (UI's). ",
								"task" : "Primary approach was to understanding the interest of an architecture firm to their clients and how the client base is assembled. Using this information apply them to the UX design to capture the client’s interest. The client’s should instantly know they are viewing an architecture firm web site, see examples of their work and a short description about the business.",
								"action" : "The project was initial sketched and then wireframe; elements of the designed were discussed and revised before prototyping. The project went through a few iterations until the final design.",
								"result" : "The result presents a bold and attractive impression for prospective clients.",
								"gitlink" : "https://github.com/Peekay777/smallbusiness",
								"link" : "http://peekay777.github.io/smallbusiness/",
								"screeny" : "smallbusinessscreeny.png"
							}],
							"Quiz App" : [{
								"skills" : "HTML, CSS, JavaScript, jQuery, OO Programming",
								"situation" : "A quiz using JavaScript object oriented programming to create a multi choice answer game.",
								"task" : "The quiz was on movies and there stars. The theme was based on the popular IMDB.com that synonymous with the genre. The idea was that a user would instantly recognise the general layout and know that the quiz was about movies. The functionality was designed to have the player and questions as objects with methods to show questions, keep score and progress in the game.",
								"action" : "The quiz was designed to allow the expansion to more than the 5 question and not to be constrained by the limitation of the prototype. The player progress and score is available on each page and feedback on answers correctness. Also an extra requirement was to build responsive design into the app to allow viewing in different browser resolutions.",
								"result" : "The project captures the thematic well and includes the functionality required to play a quiz game.",
								"gitlink" : "https://github.com/Peekay777/quizapp",
								"link" : "http://peekay777.github.io/quizapp/",
								"screeny" : "quizappscreeny.png"
							}],
							"Guessing Game" : [{
								"skills" : "JavaScript, jQuery",
								"situation" : "Complete the logic for a predesigned guessing game. The HTML and CSS are already completed with the assignment simulating what it is like to collaboratively work on a project that is in progress.",
								"task" : "The game requires certain functionality be included and incorporated into the design. Elements like the number of guesses, list of past guesses and feedback on guess.",
								"action" : "A breakdown of the logic into steps was the first step. The guess ranges required adjustment to for feedback, like Hot, needed to be amended to be a short range to allow the user better response.",
								"result" : "A challenge to work off other peoples code but a necessary skill.",
								"gitlink" : "https://github.com/Peekay777/hot-or-cold",
								"link" : "http://peekay777.github.io/hot-or-cold/",
								"screeny" : "hotcoldscreeny.png"
							}],
							"Shopping List" : [{
								"skills" : "HTML, CSS, jQuery",
								"situation" : "Build a shopping list that will allow users to enter, check and remove items from a list.",
								"task" : "The design needed to consider the functionality as a priority and the visuals secondary. Once every functional element had been added a theme could be added to suggest that the list was for shopping (although the app could do other types of lists).",
								"action" : "The design was wireframed with a non-interactive version created initially. The JavaScript elements added last.",
								"result" : "A complete shopping list application with all the functionality that would be expected.",
								"gitlink" : "https://github.com/Peekay777/shoppinglist",
								"link" : "http://peekay777.github.io/shoppinglist/",
								"screeny" : "shoppinglistscreeny.png"
							}],
							"Stacker AJAX" : [{
								"skills" : "JavaScript, jQuery, AJAX",
								"situation" : "Complete the remaining functionality to find the Top Answerers on StackOverflow using the StackExchange API.",
								"task" : "Investigate the StackExchange API to understand the data available and design the response to the query. The response returned the name, picture and score of the answerer.",
								"action" : "Completed the JavaScript code for the app, using the Chrome’s Dev Tools to debug any issues and continued to iterate until completed.",
								"result" : "The finished app demonstrates an AJAX calls to StackExchange API.",
								"gitlink" : "https://github.com/Peekay777/stackerAJAX",
								"link" : "http://peekay777.github.io/stackerAJAX/",
								"screeny" : "stackapiscreeny.png"
							}],
							"Street Fighter" : [{
								"skills" : "JavaScript, jQuery",
								"situation" : "Build an interactive web page inspired by the arcade classic Street Fighter.",
								"task" : "Learn the jQuery API through the documentation and use to manipulate the DOM, events and effects to construct the Street Fighter page.",
								"action" : "Implement the different functionality including the Pose for the character.",
								"result" : "A fun example of jQuery in action.",
								"gitlink" : "https://github.com/Peekay777/jquery-streetfighter",
								"link" : "http://peekay777.github.io/jquery-streetfighter/main.html",
								"screeny" : "streetfighterscreeny.png"
							}],
							"Google Clone" : [{
								"skills" : "HTML, CSS",
								"situation" : "An exercise to clone the Google home page.",
								"task" : "This project required an initial break down of the page into its component parts. Examine each element for behaviour to mimic. Also take note on how the page reacts when the browser window changes shape.",
								"action" : "Completed the exercise with HTML and CSS.",
								"result" : "The page looks and behaves like the original except for the actual functionality.",
								"gitlink" : "https://github.com/Peekay777/google/tree/html5",
								"link" : "http://peekay777.github.io/google/",
								"screeny" : "googlescreeny.png"
							}]
}];