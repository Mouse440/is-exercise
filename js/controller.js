var controllers = angular.module('appControllers',['ngAnimate']);

controllers.
    controller('BaseController', ['$scope','$http', '$routeParams', function($scope,$http,$routeParams){
        var path = ['data/',$routeParams.routeName,'.json'].join(''); //construct the route path
        $http.get(path).success(function(data){
    		$scope.content = data;
    		$scope.routeName = $routeParams.routeName;
    	});
    }]);