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
            .otherwise({redirectTo: "/step/1"});
    });

}());
