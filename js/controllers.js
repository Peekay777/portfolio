(function () {
	'use strict';
	
	/*global angular, $ */
	var projectControllers = angular.module('projectControllers', []);
	
	projectControllers.controller('ProjectListCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
		$http.get('projects/projectList.json').success(function (data) {
			$scope.projectList = data;
		});
		/*global onResize */
		onResize();

		$scope.go = function (path) {
			$location.path(path);
		};
	}]);
	
	projectControllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', '$http', '$location', function ($scope, $routeParams, $http, $location) {
		$http.get('projects/' + $routeParams.pid + '.json').success(function (data) {
			$scope.project = data;
		});
		
		$scope.go = function (path) {
			$location.path(path);
		};
	}]);
}());