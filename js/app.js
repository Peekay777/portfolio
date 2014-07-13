(function () {
	'use strict';
	/*global angular */
	var projectsApp = angular.module('projectsApp', [
		'ngRoute',
		'projectControllers',
		'projectDirectives'
	]);
	
	projectsApp.config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'partials/projectList.html',
					controller: 'ProjectListCtrl'
				})
				.when('/:pid', {
					templateUrl: 'partials/projectDetail.html',
					controller: 'ProjectDetailCtrl'
				})
				.otherwise({
					redirectTo: '/'
				});
		}]);
}());