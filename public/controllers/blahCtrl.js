angular.module("eCommerce").controller("blahCtrl", function($scope, blahService) {
    $scope.products = {};
    $scope.getProducts = function() {
        blahService.getProducts().then(function(response) {
            $scope.products = response;
        });
    };
    $scope.getProducts();

    $scope.postProducts = function(name, description, price) {
        var obj = {
            name: name,
            description: description,
            price: price
        };
        console.log(obj);
        blahService.postProducts(obj).then(function(response) {
            $scope.products = response;
        });
    };
    $scope.changeProducts = function(product) {
        blahService.changeProducts(product).then(function(response) {
            $scope.products = response;
        });
    };
    $scope.deleteProducts = function(product) {
        blahService.deleteProducts(product._id).then(function(response) {
            $scope.products = response;
        });
    };
});