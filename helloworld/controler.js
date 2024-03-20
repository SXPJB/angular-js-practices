var app = angular.module('MyApp', []);

app.controller('MyController', function($scope) {
    $scope.name = 'Emmanuel';

    $scope.sayHello = function() {
        $scope.greeting = 'Hello ' + $scope.name + '!';
    }
});
