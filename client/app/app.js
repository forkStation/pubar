import angular from 'angular';
import  'vendor/ionic.min';
import  'vendor/ionic-angular.min';
import 'ngAnimate';
import 'ngSanitize';

import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import './lib/scss/ionic.scss';

angular.module('app', [
    uiRouter,
    'ionic',
   // Common.name,
   Components.name
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('appDemo', AppComponent);
