(function () {
    'use strict'

    angular.module('app.notes', ['ngRoute', 'angularMoment', 'ngResource'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/notes', {
                    templateUrl: 'featureModules/notes/templates/notes.html',
                    controller: 'NotesListController'
                })
                .when('/notes/create', {
                    templateUrl: 'featureModules/notes/templates/create.html',
                    controller: 'NotesCreateController'
                })
                .when('/notes/:id', {
                    templateUrl: 'featureModules/notes/templates/note.html',
                    controller: 'NotesDisplayController'
                });
        }]);
})();
