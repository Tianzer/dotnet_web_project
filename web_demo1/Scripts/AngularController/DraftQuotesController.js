angular.module('MyApp')
    .controller('DraftQuotesController', function ($scope, LocationService) {
        $scope.QuoteNum = null;
        $scope.QuoteList = null;
        $scope.result = "";

        LocationService.getQuoteNumbers().then(function (d) {
            $scope.QuoteList = d.data;
        });
    })
    .factory('LocationService', function ($http) {
        var fac = {};
        fac.getQuoteNumbers = function () {
            return $http.get('/Data/getQuoteNumbers')
        }
        return fac;
    });
