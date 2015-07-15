var app = angular.module('myApp', []);

app.controller('validateCtrl', function($scope, $location, $locationProvider) {

    $scope.data = false;
    $scope.form = true;
    $scope.toggle = function(){
        if($scope.applicationForm.$valid){
            $scope.form =  false;
            $scope.data =  true;
        }
    };
    $locationProvider.html5Mode(true);

    $scope.go = function ( path ) {
        /*$location.path( path).replace();
        if(!$scope.$$phase) $scope.$apply();
        //$state.go(path); $location.path(path);
        $location.path('/index').replace();
        $scope.$apply();*/

            $location.path(path).replace();

    };

});



   