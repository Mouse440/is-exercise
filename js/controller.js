var controllers = angular.module('appControllers',['ngAnimate']);

controllers.
    controller('BaseController', ['$scope','$http', '$routeParams', function($scope,$http,$routeParams){
        var path = ['data/',$routeParams.routeName,'.json'].join(''); //construct the route path
        $http.get(path).success(function(data){
    		$scope.content = data;
    		$scope.$emit('dataLoaded',{ routeName: $routeParams.routeName}); //pass route name up the chain
    	});
    }]).
    controller('MenuController', ['$scope','$http', '$routeParams', function($scope,$http,$routeParams){
        $scope.$on('dataLoaded', function(event, args){     
            $scope.routeName = args.routeName;                        //set routename to the scope 
          });
    }]);