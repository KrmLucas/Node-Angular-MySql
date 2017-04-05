(function(){
    'use strict';
    angular.module('Products')
      .controller('ListProductsCtrl', ['$scope','ProductsSrv', '$routeParams', '$location', ListProductsCtrl]);

      function ListProductsCtrl (vm, ProductsSrv, params, location){
            vm.service = ProductsSrv;
            vm.products = [];

            vm.service.findAll(function(err, res){
                if(err){
                    return alert('Ocurrió un error buscando un usuario: ' + err)
                }
                vm.products = res;
            })
        };
})();