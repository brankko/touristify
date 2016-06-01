'use strict';

/**
 * @ngdoc overview
 * @name touristifyApp
 * @description
 * # touristifyApp
 *
 * Main module of the application.
 */
var touristifyApp = angular
  .module('touristifyApp', [
    'ngRoute',
    'rzModule',
    'ngTable',
    'chart.js'
  ]);

  touristifyApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/people', {
        templateUrl: 'views/people.html',
        controller: 'PeopleCtrl',
        controllerAs: 'people'
      })
      .when('/report', {
        templateUrl: 'views/report.html',
        controller: 'ReportCtrl',
        controllerAs: 'report'
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
