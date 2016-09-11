angular.module('myApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/home', {
    templateUrl: '/views/home.html',
    controller: 'HomeController',
    controllerAs: 'home'
  })


  $locationProvider.html5Mode(true);
}]);
