var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/contact", {
        templateUrl : "contact.html"
    })
    .when("/green", {
        templateUrl : "green.html"
    })
    .when("/blue", {
        templateUrl : "blue.html"
    });
});