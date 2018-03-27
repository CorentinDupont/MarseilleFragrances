var app = angular.module('myApp', []);

app.controller('AccueilCtrl', ['$scope', function ($scope) {

    var init = function () {


        $scope.accueilTitle = 'Accueil';
        console.log('$scope', $scope);

        $(document).ready(function () {


        });

        $scope.$evalAsync();
    };

    $scope.$evalAsync();


    init();



}]);
