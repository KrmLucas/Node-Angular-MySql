
(function(){
    'use strict';

    angular.module('Products')
    .factory('ProductsSrv', ['$http', function($http){
        return{
            saveProduct: function(product, callback){
                $http
                    .post('/products', product)
                    .then(
                        function(res){
                            return callback(false, res.data)
                        },
                        function(err){
                            return callback(err.data)
                        }
                    )
            },
            updateProduct: function(id, product, callback){
                $http
                    .put('/products/' + id, product)
                    .then(
                        function(res){
                            return callback(false, res.data)
                        },
                        function(err){
                            return callback(err.data)
                        }
                    )
            },
            deleteProduct: function(id, callback){
                $http
                    .delete('/products/' + id)
                    .then(
                        function(res){
                            return callback(false, res.data)
                        },
                        function(err){
                            return callback(err.data)
                        }
                    )
            },
            findAll: function(callback){
                $http
                    .get('/products')
                    .then(
                        function(res){
                            return callback(false, res.data)
                        },
                        function(err){
                            return callback(err.data)
                        }
                    )
            },
            findById: function(id, callback){
                $http
                    .get('/products/' + id)
                    .then(
                        function(res){
                            return callback(false, res.data)
                        },
                        function(err){
                            return callback(err.data)
                        }
                    )
            }
        }
    }])
})();
