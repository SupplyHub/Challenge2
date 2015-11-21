'use strict';

// product configuration 
angular.module('supplyhubApp')
.factory('myHttpInterceptor', function($q, $window){
	return {
 		request: function(config){
			return config || $q.when(config);
		},
		// this will pass a 404 request through to the service
		responseError: function(config){
			return config;
		}
	};
});