angular.module('myApp').factory('RouteService', ['$location', function ($location){

function homeRoute(){
  $location.path('/home');
}



return {

  homeRoute: homeRoute,


}
}])
