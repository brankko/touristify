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

    //slider code
    $scope.slider = {
      min: 18,
      max: 24,
      options: {
        floor: 50,
        ceil: 70,
        onChange: function(){
          $scope.count($scope.people);
        }
      }
    };

    $scope.people = null;
    $http.get('data/people2.json').success(function(data){
      $scope.people = data;
      $scope.count(data);
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

});
