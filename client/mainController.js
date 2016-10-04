angular.module('app').controller('MainController', ['$http','$location','RouteService', '$anchorScroll', '$document','$interval', function($http,$location, RouteService, $anchorScroll, $document, $interval){
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

  vm.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
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
    vm.showProject.bsbaits = false;
    vm.showProject[id] = true;
  }

  vm.showProject = {
    golfUSA: false,
    cti: false,
  }

 var images =  [
      {image:'/assets/weblogo.png'},
      {image:'/assets/csslogo.png'},
      {image:'/assets/jslogo.png'},
      {image:'/assets/Gitlogo.png'},
      {image:'/assets/AngularJS-large.png'},
      {image:'/assets/bootstraplogo.png'},
      {image:'/assets/jquerylogo.png'},
      {image:'/assets/nodejslogo.png'},
      {image:'/assets/mongologo.png'},
      {image:'/assets/sasslogo.svg'},
      {image:'/assets/foundationLogo.png'},
      {image:'/assets/Npmlogo.png'}
    ];

vm.images = images;

  // vm.skillsImg2 = images.images[1];

  var gusaDesc = {
    desc: ['This application was built for a Minnesota golf retail store. The store had a sales reward program that allowed customers to earn rewards that could be applied towards future purchases. The store used paper punch cards to keep track of these rewards. For every $10 a customer spends they receive a punch, after they accumulted 15 punches(fill up a card), they recieve $10 of their next purchase. This was a hastle to maintain and manage especially when some customers would accumulate 10 or more cards in a single purchase.',
    'This application solves this problem by handling all of the calculations of the rewards as well as maintaining all of their customers and rewards data in one place. This also saves customers the hassel of having to keep track of their cards. After each sale, the application sends out an email with all of that customers rewards information',
    'This is a full stack application built using the MEAN stack( MongoDB, Express, Angular.JS, Node.JS).Other technologies include bootstrap, Angular UI bootstrap, Hogan.js, Nodemailer, and a few others.',
     'To checkout the application click on the link below.']
  }

  var ctiDesc = {
    desc: ['This application was built for Compatible Technology International (CTI) a nonprofit that is dedicated to helping families in developing countries access innovative farming tools so they can produce food more sustainably and bring their crops to market.',
    'The goal of this project was to develop an automated email system that will help CTI send thank you emails to their donors more efficiently. Currently CTI inputs each donor\'s information into Salesforce after each donation. They then print a report with the donor information to write emails one at a time or attach a word document to the email for each donation. This is very time intensive and inefficient',
     'Working closely with client we developed a full stack application to improve this process. This application saves CTI time by automatically importing donor information from Salesforce which populates custom email templates with donor information automatically. These emails can then be further customized or sent immediately.',
     'Technologies used to build this application - MEAN Stack(MongoDB, Express.js, AngularJS, Node.js), Bootstrap, Angular UI Bootstrap, HTML5, CSS3, Nodemailer, Hogan.js, Salesforce.']
  }

  vm.gusaDesc = gusaDesc.desc[0];

  vm.ctiDesc = ctiDesc.desc[0];

  var golfImages = {
    images: ['/assets/rewardsHome.png','/assets/rewardsPage.png','/assets/rewardsUse.png','/assets/rewardsDB.png']
  }

  var num = 0;

  vm.nextGolfImageB = function() {
    num--;
    if (num < 0) {
      num = 3;
    }
    if (num == 3) {
      vm.showLink = true;
    }
    console.log('num', num);
    vm.golfImages = golfImages.images[num];
    vm.gusaDesc = gusaDesc.desc[num];
  }

  vm.nextGolfImageF = function() {
    num++;
    if (num > 3) {
      num = 0;
    }
    if (num === 3 ) {
      vm.showLink = true;
    } else {
      vm.showLink = false;
    }

    console.log('num', num);
    vm.golfImages = golfImages.images[num];
    vm.gusaDesc = gusaDesc.desc[num];
  }
    vm.golfImages = golfImages.images[0];

    var ctiImages = {
      images: ['/assets/ctihome.png','/assets/ctiUpload.png','/assets/ctiEditTemplate.png','/assets/ctiSentMail.png']
    }
    var ctiNum = 0;
    vm.nextCtiImageF = function() {
      ctiNum++;
      if (ctiNum > 3) {
        ctiNum = 0;
      }
      vm.ctiImages = ctiImages.images[ctiNum];
      vm.ctiDesc = ctiDesc.desc[ctiNum];
    }
    vm.nextCtiImageB = function() {
      ctiNum--;
      if (ctiNum < 0) {
        ctiNum = 3;
      }
      vm.ctiImages = ctiImages.images[ctiNum];
      vm.ctiDesc = ctiDesc.desc[ctiNum];
    }
      vm.ctiImages = ctiImages.images[0];



// vm.myInterval = 3000;

// var slides = ['assets/JustinDoty.jpg','assets/zoey2.jpg','assets/fishingWithCharlotte.jpg','assets/mountainView.jpg'];


//  vm.slide = slides[0];

//  $interval(function(){
//    if(vm.slide == slides[0])
//        vm.slide = slides[1];
//    else if(vm.slide == slides[1])
//        vm.slide = slides[2];
//   else if(vm.slide == slides[2])
//        vm.slide = slides[3];
//    else
//         vm.slide = slides[0];
//     }, 3000, 0);



}]);
