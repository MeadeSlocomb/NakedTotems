(function() {
  'use strict';

  angular.module('NakedTotems', ['ui.router'])

  .config([ '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'templates/home.tpl.html',
          controller: 'MainController'
      })
        .state('shapes', {
          url: '/shapes',
          templateUrl: 'templates/shapes.tpl.html',
          controller: 'ShopController'
      })
        .state('birdbaths', {
          url: '/birdbaths',
          templateUrl: 'templates/birdbaths.tpl.html',
          controller: 'ShopController'
      })
        .state('totems', {
          url: '/totems',
          templateUrl: 'templates/totems.tpl.html',
          controller: 'ShopController'
      })
        .state('tables', {
          url: '/tables',
          templateUrl: 'templates/tables.tpl.html',
          controller: 'ShopController'
      })
        .state('mirrors', {
          url: '/mirrors',
          templateUrl: 'templates/mirrors.tpl.html',
          controller: 'ShopController'
      })
        .state('materials', {
          url: '/materials',
          templateUrl: 'templates/materials.tpl.html',
          controller: 'ShopController'
      })
        .state('about', {
          url: '/about',
          templateUrl: 'templates/about.tpl.html',
          controller: 'MainController'
      })
        .state('contact', {
          url: '/contact',
          templateUrl: 'templates/contact.tpl.html',
          controller: 'MainController'
      });

    }

  ]);

}());
