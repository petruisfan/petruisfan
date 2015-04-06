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
            .when('/step/3', {
                templateUrl: 'views/step3.html'
            })
            .when('/step/4', {
                templateUrl: 'views/step4.html'
            })
            .when('/step/5', {
                templateUrl: 'views/step5.html'
            })
            .otherwise({redirectTo: "/step/1"});
    });

}());
