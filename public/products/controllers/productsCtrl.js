(function () {
  'use strict';

  angular
    .module('Products')
    .controller('ProductsController', ['$scope', '$routeParams', '$location', '$window', 'ProductsSrv', ProductsController]);

  function ProductsController (vm, params, $location, $window, service) {
        vm.mostrarDelete = false; //el boton delete en el form
        vm.subasta = {};
        vm.flagForm = false;
        vm.seeForm = function (){
            vm.flagForm=true;
        }
        vm.reset = function(){
            clearMessages();
            vm.subasta = {}
        }
        vm.update = function(){
            clearMessages();
            if (vm.product.id) {
                service.updateProduct(vm.product.id, vm.product, function(err, res) {
                        if (err) {
                            return setError('Ocurrio el error: ' + err)
                        }
                        $location.path('/product/' + res.id);
                    });
            }else {
                service.saveProduct(vm.product, function(err, res) {
                        if (err) {
                            return setError('Ocurrio el error: ' + err)
                        }
                        $location.path('/product/' + res.id);
                    });
            }
        }
        vm.delete = function(){
            service.deleteProduct(params.productId, function(err, res){
                if (err) {
                    return setError('Ocurrio el error: ' + err)
                }else {
                    $window.location.href ='#/products/listar';
                }
            })
        }
        vm.search = function(){
            clearMessages();
            service.findById(vm.productId, function(err, res){
                if (err) {
                    return setError('Ocurrio un error buscando un producto: ' + err)
                }
                vm.product = res;
            })
        }
        if (params.productId) {
            vm.mostrarDelete = true;
            vm.productId = params.productId;
            vm.search();
        }
        function setMessage(message){
        vm.message = message;
        }

        function setError(error){
            vm.error = error;
        }

        function clearMessages(){
            setError('')
            setMessage('')
        }
    }
})();
