(function () {
    'use strict'

    angular.module('app.notes')
        .controller('NotesDisplayController', ['$scope', '$routeParams', '$location', 'NoteResource', function($scope, $routeParams, $location, NoteResource) {
            $scope.note = {};
            NoteResource.get({ id: $routeParams.id }, function (note){
                $scope.note = note;
            });

            $scope.delete = function() {
                if($scope.note) { // validation checks
                    $scope.note.$delete(function() {  // make delete REST call
                        return $location.path('/notes'); // on success redirect to main note list page
                    });
                }
            };
        }]);
})();
