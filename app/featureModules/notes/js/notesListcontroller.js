(function () {
    'use strict'

    angular.module('app.notes')
        .controller('NotesListController', ['$scope', 'NoteResource', function($scope, NoteResource) {
            $scope.notes = [];
            NoteResource.query(function (notes) {
                $scope.notes = notes;
            }, function() {
                alert('There was an error!');
            });
        }]);
})();
