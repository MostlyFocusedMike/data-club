import angular from 'angular'
import ngSanitize from 'angular-sanitize'
import notesCtrl from './components/notes/controller';
import welcomeCmpt from './components/welcome';
import meetingsCmpt from './components/meetings';
import topicsCmpt from './components/topics';
import notesCmpt from './components/notes';

// that ngSanitize may be irrelevant now that $sce is involved, but not sure
const app  = angular.module("app", [ngSanitize]);

// this is how you do dependency injection with component controllers
// you have to register the controller off the main module with the 
// proper injections, here we need $sce, and then 
// in the component, reference it by the given name. 
// You don't have to use the array if you use ngInject though, 
// but this is how you do it normally
app.controller('notesCtrl', ['$sce', notesCtrl]);

app.component('welcome', welcomeCmpt)
app.component('meetings', meetingsCmpt)
app.component('topics', topicsCmpt)
app.component('notes', notesCmpt)
