(function () {
    'use strict'

    angular.module('app.notes')
        .filter('limitWithEllipsis', function() {
            return function(input, limit) {
                if(!input) {
                    return '';
                }
                var trimmedInput = input.trim();
                return (trimmedInput.length > limit) ? trimmedInput.substring(0, limit) + '...' : trimmedInput;
            };
        });
})();
