'use strict';

// product configuration 
angular.module('supplyhubApp')
.constant('CONFIG', {
	api: {
		domain: "http://api.vip.supplyhub.com:19000/products",
	},
	data:
		{
			limit: 10
		}
	}
);

// 404 interceptor
angular.module('supplyhubApp')
.config(function($httpProvider){
	$httpProvider.interceptors.push('myHttpInterceptor');
});