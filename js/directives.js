(function () {
	'use strict';
	/*global angular */
	var projectDirectives = angular.module('projectDirectives', []);
	
	projectDirectives.directive("myStyle", function (){
		return {
			restrict: 'A',
			link: function(scope, element, attrs)
			{
				var el   = element[0],
					attr = el.getAttribute('style');

				el.setAttribute('style', attr);

				// We need to watch for changes in the style in case required data is not yet ready when compiling
				attrs.$observe('style', function (){
					attr = el.getAttribute('style');

					if(attr)
					{
						el.setAttribute('style', attr);
					}
				});
			}
		};
	});
}());