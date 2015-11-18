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

  	$scope.searchFor = function(product){
  		Search.searchFor(product).then(function(data){
  			$scope.results = data;
  			console.info($scope.results);
  		});
   		Search.getCountFor(product).then(function(data){
   			$scope.count = data;
   		});
  	}
    
  }]);
