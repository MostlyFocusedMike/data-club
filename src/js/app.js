import 'MainStyle'
import angular from 'angular'
import mainController from './controllers/MainController'
import welcomeComponent from './components/MainComponent';

const app  = angular.module("app", []);
app.controller("MainController", ['$scope', mainController]);
app.component('test', mainComponent)
app.component('welcomeComponent', welcomeComponent)
