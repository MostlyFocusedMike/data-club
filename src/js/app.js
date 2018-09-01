import 'MainStyle'
import angular from 'angular'

const app  = angular.module("app", []);

app.controller("MainController", ['$scope', function($scope){
    this.title = "hello there"
    this.myInput = "wow ok then"
    this.checkVal = false
    this.getCheckVal = function() {
        alert(this.checkVal)
    }
    this.show = true
}]);
console.log("hello");