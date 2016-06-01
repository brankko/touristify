'use strict';

/**
 * @ngdoc function
 * @name touristifyApp.controller:PeopleCtrl
 * @description
 * # PeopleCtrl
 * Controller of the touristifyApp
 */
touristifyApp.controller('PeopleCtrl', function ($scope, $http, NgTableParams) {

    $scope.people = null;
    $http.get('data/people2.json').success(function(data){
      $scope.people = data;

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

});
