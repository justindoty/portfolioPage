angular.module('myApp').controller('MainController', ['$http','$location','RouteService', function($http,$location, RouteService){
  var vm = this;

  this.hello = 'Do i remember how to do this?';

  vm.homeRoute = function(){
    RouteService.homeRoute();
  }

}]);
