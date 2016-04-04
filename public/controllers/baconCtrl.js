angular.module("eCommerce").controller("baconCtrl", function($scope, baconService) {
    $scope.products = {};
    $scope.getProducts = function() {
        baconService.getProducts().then(function(response) {
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
        baconService.postProducts(obj).then(function(response) {
            $scope.products = response;
        });
    };
    $scope.changeProducts = function(product) {
        baconService.changeProducts(product).then(function(response) {
            $scope.products = response;
        });
    };
    $scope.deleteProducts = function(product) {
        baconService.deleteProducts(product._id).then(function(response) {
            $scope.products = response;
        });
    };
});