'use strict';

angular.module('blogger', ['firebase','ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/home/home.html',controller: 'PostCtrl'})
  .state('contact', {url: '/contact', templateUrl: '/views/contact/contact.html'})
  .state('login', {url: '/login', templateUrl: '/views/login/login.html',controller: 'LoginCtrl'})
  .state('post', {url: '/post', templateUrl: '/views/post/post.html',controller: 'PostCtrl'})
  .state('onepost', {url: '/{postInfo}', templateUrl: '/views/onepost/onepost.html', controller: 'OneCtrl'});
}])
.run(['$rootScope','$window','$firebaseAuth', 'firebaseUrl', function($rootScope,$window,$firebaseAuth,firebaseUrl){
  $rootScope.fbRoot = new $window.Firebase(firebaseUrl);
  $rootScope.afAuth = $firebaseAuth($rootScope.fbRoot);
}]);
