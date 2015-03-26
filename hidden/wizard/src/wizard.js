(function(){
    "use strict";

    var wizard = angular.module("wizard", ["ngRoute"]);

    wizard.config(function($routeProvider) {
        $routeProvider
            .when('/step/1', {
                templateUrl: 'views/step1.html'
            })
            .when('/step/2', {
                templateUrl: 'views/step2.html'
            })
            .when('/deploy/user', {
                templateUrl: 'views/step3.html'
            })
            .when('/deploy/computer', {
                templateUrl: 'views/step3.html'
            })
            .when('/step/4', {
                templateUrl: 'views/step4.html'
            })
            .when('/step/5', {
                templateUrl: 'views/step5.html'
            })
            .when('/step/6', {
                templateUrl: 'views/step6.html'
            })
            .otherwise({redirectTo: "/step/1"});
    });
}());