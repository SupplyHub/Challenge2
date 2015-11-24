'use strict';

/**
 * @ngdoc function
 * @name supplyhubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the supplyhubApp
 */
angular.module('supplyhubApp')
.controller('MainCtrl', ["$scope", "Search", "$location", "$routeParams", "CONFIG", "$q", function ($scope, Search, $location, $routeParams, CONFIG, $q) {
	

console.info($routeParams);

	$scope.results = null;
	$scope.count = -1;
	$scope.product = $routeParams.product || null;
	$scope.currentPage = $routeParams.currentPage || 1;
	$scope.maxSize = CONFIG.data.maxSize;
	$scope.totalItems = CONFIG.data.limit;

	$scope.searchFor = startSearch;

	if ($scope.product){
		searchFor($scope.product);
	}

	$scope.setPage = function (pageNo){
		console.info("setting page to "+ pageNo);
		$scope.currentPage = pageNo;
	};

	$scope.pageChanged = function(){
		if ($scope.count === -1){return;}
		if (!$scope.product){reset(); return;}
		console.log('Page changed to: ' + $scope.currentPage);
		console.info("count is " + $scope.count);
		search();
		$location.search({'currentPage': $scope.currentPage, 'product': $scope.product});
	};

	function startSearch (product){
		$scope.currentPage = 1;
		searchFor(product);
	}

	function reset(){
		$scope.currentPage = 1;
		$scope.count = -1;
		$scope.results = null;
		$location.search({});
	}

	function search(){
		console.info("SEARCH!!!!!");
		return Search.searchFor($scope.product, ($scope.currentPage - 1) * $scope.totalItems).then(function(data){
			if (data.statusCode === 404){
				$scope.results = null;
			} else {
				$scope.results = data;
			}			
		});
	}

	function count(){
		return Search.getCountFor($scope.product).then(function(data){
			console.info("got count of " + data);
 			$scope.count = data;
 		});
	}

	function setCurrentPage(){
		var defer = $q.defer();
		$scope.currentPage = $routeParams.currentPage || 1;
		console.info("set current page tp  " + $scope.currentPage);
		defer.resolve($scope.currentPage);
		return defer.promise;
	}

	function searchFor(product){
		if (!product) {reset(); return;}
		$scope.product = product;
		count().then(setCurrentPage).then(search);
 		
 		$location.search({'currentPage': $scope.currentPage, 'product': $scope.product});
	}
}]);
 
