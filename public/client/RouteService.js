angular.module('myApp').factory('RouteService', ['$location', function ($location){


function homeRoute() {
  $location.path('/home');
}
function aboutRoute(){
  $location.path('/about');
}
function workRoute() {
  $location.path('/work');
}
function contactRoute(){
  $location.path('/contact');
}




return {
  homeRoute: homeRoute,
  aboutRoute: aboutRoute,
  workRoute: workRoute,
  contactRoute: contactRoute,

}
}])
