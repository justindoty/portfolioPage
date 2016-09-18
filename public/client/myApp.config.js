angular.module('myApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/home', {
    templateUrl: '/views/home.html',
    controller: 'homeController',
    controllerAs: 'home'
  })
  .when('/about', {
    templateUrl: '/views/about.html',
    controller: 'aboutController',
    controllerAs: 'about'
  })
  .when('/work', {
    templateUrl: '/views/work.html',
    controller: 'workController',
    controllerAs: 'work'
  })
  .when('/contact', {
    templateUrl: '/views/contact.html',
    controller: 'contactController',
    controllerAs: 'contact'
  })

  .otherwise({redirectTo:'/'});

  $locationProvider.html5Mode(true);
}]);
