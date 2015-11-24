'use strict';

/**
 * @ngdoc overview
 * @name supplyhubApp
 * @description
 * # supplyhubApp
 *
 * Main module of the application.
 */
angular
  .module('supplyhubApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .otherwise({
        redirectTo: '/'
      });
  });
