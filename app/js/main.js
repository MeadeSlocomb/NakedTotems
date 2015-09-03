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
      });

    }

  ]);

}());
