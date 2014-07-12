(function () {
	'use strict';
	/*global angular */
	var projectControllers = angular.module('projectControllers', []);
	
	projectControllers.controller('ProjectListCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('projects/projectList.json').success(function (data) {
			$scope.projectList = data;
		});
	}]);
	
	projectControllers.controller('ProjectDetailsCtrl', ['$scope', '$routeParams', function ($scope, $http) {
		
	}]);
}());