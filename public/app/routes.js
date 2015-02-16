angular.module('cargoNgApp')

 .config(function($routeProvider, $locationProvider) {

  $routeProvider
   .when('/', {
    templateUrl: '/app/partials/home.html',
    controller: 'MainController'
  })

  .when('/personalize', {
    templateUrl: '/app/partials/personalize.html',
    controller: 'PersonalizeController'
  })

  .when('/contact_us', {
    templateUrl: '/app/partials/contact_us.html',
    controller: 'ContactUsController'
  })

  .when('/new_instance', {
    templateUrl: '/app/partials/new_instance.html',
    controller: 'NewInstanceController'
  })

  .when('/instances', {
    templateUrl: '/app/partials/instances.html',
    controller: 'InstancesController'
  })

  ;

});
