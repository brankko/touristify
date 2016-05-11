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
    var length = $scope.people;
    var total =0;
    var avarage ;
    var counter=0;
    $scope.lowLimit = 50;

    for (var i = 0; i < data.length; i++) {

      total += data[i].age;
      avarage = total/(i+1);

      if( data[i].age >=  $scope.lowLimit ){
        counter ++;
      }
      console.log(counter);
    }

    $scope.counter = counter;

    $scope.avarage= Math.round(avarage);

    
    //slider code
    $scope.slider = {
      value: 10
    };
  });
   
 });
