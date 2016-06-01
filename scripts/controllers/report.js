'use strict';

/**
 * @ngdoc function
 * @name touristifyApp.controller:ReportCtrl
 * @description
 * # ReportCtrl
 * Controller of the touristifyApp
 */
touristifyApp.controller('ReportCtrl', function ($scope, $http) {
    $scope.countFemale = 0;
    $scope.countMale = 0;

    // getting the people data
    $scope.people = null;
    $http.get('data/people2.json').success(function(data){
      $scope.people = data;
      $scope.count(data);
    });


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


    // pie chart section
    $scope.pie1 = {
      labels: ["Female", "Male"],
      data: [$scope.countFemale, $scope.countMale]
    };

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
});
