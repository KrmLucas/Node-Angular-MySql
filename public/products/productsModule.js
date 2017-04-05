(function(){
    'use strict';
    angular.module('Products',[])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider
            .when('/products/crear', {
                templateUrl: 'products/partials/formProduct.html',
                controller: 'ProductsController'
            })
            .when('/products/listar', {
                templateUrl: 'products/partials/productsList.html',
                controller: 'ListProductsCtrl'
            })
    }])
})();