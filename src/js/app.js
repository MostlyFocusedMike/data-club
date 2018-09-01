import 'MainStyle'
import angular from 'angular'
import mainController from './controllers/MainController'
import welcomeCmpt from './components/welcome';
import meetingsCmpt from './components/meetings';

const app  = angular.module("app", []);
app.controller("MainController", ['$scope', mainController]);
app.component('welcome', welcomeCmpt)
app.component('meetings', meetingsCmpt)
