import angular from 'angular';
import uiRouter from 'angular-ui-router';
import textComponent from './text.component';

let textModule = angular.module('text', [
  uiRouter
])

.component('text', textComponent);

export default textModule;
