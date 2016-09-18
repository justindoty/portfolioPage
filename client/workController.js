angular.module('app').controller('WorkController', ['$http', '$location', function($http, $location){

  var vm = this;

  vm.golfUSA = function() {
    console.log('Golf USA CLICKED');
  }

  vm.cti = function() {
    console.log('CTI CLICKED');
  }

}]);
