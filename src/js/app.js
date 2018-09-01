import 'MainStyle'
import angular from 'angular'
import mainController from './controllers/MainController'

const app  = angular.module("app", []);
app.controller("MainController", ['$scope', mainController]);
