'use strict';

/**
 * @ngdoc function
 * @name touristifyApp.controller:ShowDataCtrl
 * @description
 * # ShowDataCtrl
 * Controller of the touristifyApp
 */
 angular.module('touristifyApp')
 .controller('ShowDataCtrl', function ($scope, $http, NgTableParams) {

    //slider code
    $scope.slider = {
      min: 50,
      max: 70,
      options: {
        floor: 14,
        ceil: 99,
        onChange: function(){
          $scope.count($scope.people);
        }
      }
    };

    $scope.people = null;
    $http.get('data/people2.json').success(function(data){
      $scope.people = data;
      $scope.count(data);

      // ngTable init
      $scope.tableParams = new NgTableParams(
         {
            page: 1,
            count: 10
          }, 
          {
            total: data.length,
            getData: function($defer, params) {
              $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
         }
      );

    });

    $scope.count = function(data){
      var length = $scope.people;
      var total = 0;
      var avarage;
      var counter = 0;

      for (var i = 0; i < data.length; i++) {

        total += data[i].age;
        avarage = total/(i+1);

        if ( (data[i].age >= $scope.slider.min) && (data[i].age <= $scope.slider.max) ){
          counter ++;
        }

      }

      $scope.counter = counter;
      $scope.avarage = Math.round(avarage);
    };

    // filtering 
    $scope.filterAges = function(person) {
        if ( (person.age >= $scope.slider.min) && (person.age <= $scope.slider.max) ){
          return true;
        } else {
          return false;
        }
    };

});
