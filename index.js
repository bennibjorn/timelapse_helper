var ChatClient = angular.module('tlHelper', ['ngRoute']);

ChatClient.config(
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'watcher/watcher.html',
                controller: 'WatchController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
);
