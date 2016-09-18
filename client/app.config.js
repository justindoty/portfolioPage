angular.module('app').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/home', {
    templateUrl: '/views/home.html',
    controller: 'HomeController',
    controllerAs: 'home'
  })
  .when('/about', {
    templateUrl: '/views/about.html',
    controller: 'AboutController',
    controllerAs: 'about'
  })
  .when('/work', {
    templateUrl: '/views/work.html',
    controller: 'WorkController',
    controllerAs: 'work'
  })
  .when('/contact', {
    templateUrl: '/views/contact.html',
    controller: 'ContactController',
    controllerAs: 'contact'
  })

  .otherwise({redirectTo:'/'});

  $locationProvider.html5Mode(true);
}]);
