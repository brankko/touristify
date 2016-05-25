'use strict';

/**
 * @ngdoc function
 * @name touristifyApp.controller:ShowDataCtrl
 * @description
 * # ShowDataCtrl
 * Controller of the touristifyApp
 */
 touristifyApp.controller('ShowDataCtrl', function ($scope, $http, NgTableParams, $timeout) {
    $scope.countFemale = 0;
    $scope.countMale = 0;
    
    // chart section
    $scope.chart1 = {
      labels: ["10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79"],
      series: ['Age'],
      data: [
        [65, 59, 80, 81, 56, 55, 40]
      ]
    };
    
    // pie chart section
    $scope.pie1 = {
      labels: ["Female", "Male"],
      data: [$scope.countFemale, $scope.countMale]
    };

    //slider code
    $scope.slider = {
      min: 50,
      max: 70,
      options: {
        floor: 14,
        ceil: 99,
        onChange: function(){
          $scope.count($scope.people);
          $scope.pie1.data = [$scope.countFemale, $scope.countMale];
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
      $scope.countFemale = 0;
      $scope.countMale = 0;

      for (var i = 0; i < data.length; i++) {

        total += data[i].age;
        avarage = total/(i+1);

        if ( (data[i].age >= $scope.slider.min) && (data[i].age <= $scope.slider.max) ){
          counter ++;
          if (data[i].gender == 'female') {
            $scope.countFemale++;
          }
          if (data[i].gender == 'male') {
            $scope.countMale++;
          }
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
