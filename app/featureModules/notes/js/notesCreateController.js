
(function () {
    'use strict'

    angular.module('app.notes')
        .controller('NotesCreateController', ['$scope', '$location', 'NoteResource', function($scope, $location, NoteResource) {
            $scope.note = new NoteResource(); // sets up a note model as a $resource object

            $scope.add = function() {
                if($scope.note) {  // perform any validation checks desired
                    $scope.note.created = new Date();
                    $scope.note.$save(function() { // save the object
                        return $location.path('/notes'); // on success of save, redirect to main note list page
                    }); // there could be an error function added in here, but it is left out of the tutorial
                }
            };
        }]);
})();
