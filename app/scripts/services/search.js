'use strict';

/**
 * @ngdoc function
 * @name supplyhubApp.service.Search
 * @description
 * # Search Service
 * Service of the supplyhubApp
 */
angular.module('supplyhubApp')
  .service('Search',["$http", "CONFIG", function ($http, CONFIG) {
  	var domain = CONFIG.api.domain;
  	

  	function searchFor(product,_skip){
  		if (!product) { return; }
  		//console.info("searching for " + product);
  		var skip = _skip || 0;
	  	return _http({"search": product, limit:CONFIG.data.limit, skip:skip}).then(function(data){
	  		return data;
	  	});
  	}

  	function getCountFor(product){
  		//console.info("getting count for " + product);
  		return _http({"search": product, "count": "1"}).then(function(data){
  			return data.count;
  		});
  	}

  	function _http(params){
  		return $http.get(domain, {params:params}).then(function(data){
  			//console.info(data);
	  		return data.data;
	  	});
  	}

   this.searchFor = searchFor;
   this.getCountFor = getCountFor;
  }]);
