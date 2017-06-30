(function () {
    // create a module
    var app = angular.module('MyApp', ['ngRoute']); // use ng-route when implement routing
    // create a controller
    app.controller('HomeController', function ($scope) { // scope used for share data between view and controller
        $scope.Message = "This is from MyApp ! ";
    });
})();