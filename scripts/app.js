'use strict';

/**
 * @ngdoc overview
 * @name touristifyApp
 * @description
 * # touristifyApp
 *
 * Main module of the application.
 */
angular
  .module('touristifyApp', [
    'ngRoute','rzModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/show', {
        templateUrl: 'views/show.html',
        controller: 'ShowDataCtrl',
        controllerAs: 'show'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
