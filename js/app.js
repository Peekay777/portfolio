(function () {
	'use strict';
	/*global angular */
	var projectsApp = angular.module('projectsApp', [
		'ngRoute',
		'projectControllers'
	]);
	
	projectsApp.config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'partials/projectList.html',
					controller: 'ProjectListCtrl'
				})
				/*.when('/phones/:phoneId', {
					templateUrl: 'partials/phone-detail.html',
					controller: 'PhoneDetailCtrl'
				}).*/
				.otherwise({
					redirectTo: '/'
				});
		}]);
}());