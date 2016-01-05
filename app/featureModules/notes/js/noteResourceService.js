(function () {
    'use strict'

    angular.module('app.notes')
        .factory('NoteResource', ['$resource', function($resource) {
            return $resource('http://localhost:8080/api/notes/:id', { id: '@id' }, {
                query: {
                    method: 'GET',
                    isArray: true,
                    transformResponse: function(data) {
                        return angular.fromJson(data).notes;
                    }
                },
                get: {
                    method: 'GET',
                    transformResponse: function(data) {
                        return angular.fromJson(data).note;
                    }
                },
                save: {
                    method: 'POST',
                    transformRequest: function(data) {
                        return JSON.stringify({'note': data});
                    }
                }
            });
        }]);
})();
