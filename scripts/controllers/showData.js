'use strict';

/**
 * @ngdoc function
 * @name touristifyApp.controller:ShowDataCtrl
 * @description
 * # ShowDataCtrl
 * Controller of the touristifyApp
 */
angular.module('touristifyApp')
  .controller('ShowDataCtrl', function ($scope, $http) {

  	$scope.people = null;
  	$http.get('data/people.json').success(function(data){
  		$scope.people = data;
  	});
    
  });
