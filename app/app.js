(function () {
    'use strict'

    angular.module('app', ['app.notes', 'ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .otherwise({
                    redirectTo: 'notes'
                });
        }]);
})();
