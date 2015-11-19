'use strict';

/**
 * @ngdoc function
 * @name supplyhubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the supplyhubApp
 */
angular.module('supplyhubApp')
.controller('MainCtrl', ["$scope", "Search", function ($scope, Search) {
	$scope.results = null
	$scope.count = -1;
	$scope.product = null;

	$scope.searchFor = function(product){
		$scope.product = product;
		if (!product) {reset(); return;}
		Search.searchFor(product).then(function(data){
			if (data.statusCode === 404){
				$scope.results = null
			} else {
				$scope.results = data;
			}
			console.info($scope.results);
		});
 		Search.getCountFor(product).then(function(data){
 			$scope.count = data;
 		});
	}

	$scope.totalItems = 10;
	$scope.currentPage = 2;

	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	}

	$scope.pageChanged = function() {
		console.log('Page changed to: ' + $scope.currentPage);
		if (!$scope.product){reset(); return;}
		Search.searchFor($scope.product, ($scope.currentPage * $scope.totalItems)).then(function(data){
			if (data.statusCode === 404){
				$scope.results = null
			} else {
				$scope.results = data;
			}
			console.info($scope.results);
		});
	}

	function reset(){
		$scope.count = -1
		$scope.results = null;
	}

	$scope.maxSize = 5;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1;
}]);

angular.module('supplyhubApp')
	.config(function($httpProvider){
		$httpProvider.interceptors.push('myHttpInterceptor');
	})
	.factory('myHttpInterceptor', function($q, $window){
		return {
	 		request: function(config){
	 			console.log('Request started'); // LOG AT REQUEST START
				return config || $q.when(config);
			},
			responseError: function(config){
				return config;
			}
		};
});
 
