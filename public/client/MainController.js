angular.module('myApp').controller('MainController', ['$http','$location','RouteService', function($http,$location, RouteService){
  var vm = this;


  vm.aboutRoute = function(){
    RouteService.aboutRoute();
  }
  vm.homeRoute = function(){
    RouteService.homeRoute();
  }
  vm.contactRoute = function(){
    RouteService.contactRoute();
  }
  vm.workRoute = function(){
    RouteService.workRoute();
  }


  // vm.golfUSA = function() {
  //   console.log('Golf USA CLICKED');
  // }
  //
  // vm.cti = function() {
  //   console.log('CTI CLICKED');
  // }

  //Sets view of menu item and highlights that item
  vm.projectClick = function(id) {
    vm.showProject.golf = false;
    vm.showProject.cti = false;
    vm.showProject[id] = true;

    // vm.menuHighlight.golfUSA = '',
    // vm.menuHighlight.cti = '',
    // vm.menuHighlight[id] = 'menu-highlight'
    console.log('showProject:', vm.showProject);
    console.log('id:', id);
  }

  vm.showProject = {
    golfUSA: true,
    cti: false,
  }

  // vm.menuHighlight = {
  //   photo: 'menu-highlight',
  //   template: '',
  //   signature: '',
  //   header: ''
  // }

  var golfImages = {
    images: ['/assets/rewardsHome.png','/assets/rewardsPage.png','/assets/rewardsUse.png','/assets/rewardsDB.png']
  }
  var num = 0;
  vm.nextGolfImage = function() {
    num++;
    if (num > 3) {
      num = 0;
    }
    console.log('num', num);
    vm.golfImages = golfImages.images[num];
  }
    vm.golfImages = golfImages.images[0];

    var ctiImages = {
      images: ['/assets/ctiEditTemplate.png','/assets/ctiUpload.png']
    }
    var ctiNum = 0;
    vm.nextCtiImage = function() {
      ctiNum++;
      if (ctiNum > 1) {
        ctiNum = 0;
      }
      console.log('num', num);
      vm.ctiImages = ctiImages.images[ctiNum];
    }
      vm.ctiImages = ctiImages.images[0];
}]);
