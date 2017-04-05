/*
Ruta al home
*/

(function(){
    'use strict';
    angular
    .module('MainRoutes', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/index/partials/home.html'
            })
            /* Default */
            .otherwise({
                redirectTo: '/'
            });
    }]);
})();
