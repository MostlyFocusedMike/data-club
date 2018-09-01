import 'MainStyle'
import angular from 'angular'
import mainController from './controllers/MainController'

const app  = angular.module("app", []);
app.controller("MainController", ['$scope', mainController]);
app.component('test', {
    template: 'Hello, {{$ctrl.user}}!',
    controller: function GreetUserController() {
      this.user = 'world';
    }
})
