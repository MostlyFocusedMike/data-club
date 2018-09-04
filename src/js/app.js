import angular from 'angular'
import ngSanitze from 'angular-sanitize'
import welcomeCmpt from './components/welcome';
import meetingsCmpt from './components/meetings';
import topicsCmpt from './components/topics';
import notesCmpt from './components/notes';

const app  = angular.module("app", [ngSanitze]);
app.component('welcome', welcomeCmpt)
app.component('meetings', meetingsCmpt)
app.component('topics', topicsCmpt)
app.component('notes', notesCmpt)
