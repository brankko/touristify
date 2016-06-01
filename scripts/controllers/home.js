'use strict';

/**
 * @ngdoc function
 * @name touristifyApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the touristifyApp
 */
touristifyApp.controller('HomeCtrl', function ($scope, $http) {
    
    // chart section
    $scope.chart1 = {
      labels: ["10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79"],
      series: ['Female', 'Male'],
      data: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]
    };


    $scope.people = null;
    $http.get('data/people2.json').success(function(data){
      $scope.people = data;
      $scope.count(data);
    });


	$scope.count = function(data){
      for (var i = 0; i < data.length; i++) {
        for (var j=0; j<7; j++) {
          if ( (data[i].age >= ((j+1)*10)) && (data[i].age <= ((j+1)*10+9)) ){
            if (data[j].gender == 'female') $scope.chart1.data[0][j]++;
            if (data[j].gender == 'male') $scope.chart1.data[1][j]++;
          }
        }
      }
	};
	
});
