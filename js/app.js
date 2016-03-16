var app = angular.module('someApp', [
    'ngRoute',
    'appControllers'
    ]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/:routeName',{
            templateUrl: 'views/template.html',
            controller: 'BaseController'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);