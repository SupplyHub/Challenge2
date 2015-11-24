'use strict';

/**
 * @ngdoc function
 * @name supplyhubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the supplyhubApp
 */
angular.module('supplyhubApp')
.controller('MainCtrl', ["$scope", "Search", "$location", "$routeParams", function ($scope, Search, $location, $routeParams) {
	

console.info($routeParams);

	$scope.results = null;
	$scope.count = -1;
	$scope.product = $routeParams.product || null;
	$scope.totalItems = 10;
	$scope.currentPage = $routeParams.currentPage || 1;
	$scope.maxSize = 5;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1;

	$scope.searchFor = startSearch;

	

	if ($scope.product){
		searchFor($scope.product);
	}

	// $scope.$on('$routeUpdate', function(){
	// 	console.info("upading");
	//   $scope.sort = $location.search().sort;
	// });

	$scope.setPage = function (pageNo){
		console.info("setting oage to "+ pageNo);
		$scope.currentPage = pageNo;
	};

	$scope.pageChanged = function(){
		console.log('Page changed to: ' + $scope.currentPage);
		if (!$scope.product){reset(); return;}
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
		Search.searchFor($scope.product, ($scope.currentPage - 1) * $scope.totalItems).then(function(data){
			if (data.statusCode === 404){
				$scope.results = null;
			} else {
				$scope.results = data;
			}			
		});
	}

	function searchFor(product){
		if (!product) {reset(); return;}
		$scope.product = product;
		search();
 		Search.getCountFor(product).then(function(data){
 			$scope.count = data;
 		});
 		$location.search({'currentPage': $scope.currentPage, 'product': $scope.product});
	}
}]);
 
