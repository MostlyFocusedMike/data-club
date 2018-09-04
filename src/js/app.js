import angular from 'angular'
import ngSanitze from 'angular-sanitize'
import mainController from './controllers/MainController'
import welcomeCmpt from './components/welcome';
import meetingsCmpt from './components/meetings';
import topicsCmpt from './components/topics';

const app  = angular.module("app", [ngSanitze]);
app.controller("MainController", ['$scope', mainController]);
app.component('welcome', welcomeCmpt)
app.component('meetings', meetingsCmpt)
app.component('topics', topicsCmpt)
