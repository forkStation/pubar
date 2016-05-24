import angular from 'angular';
import  'vendor/ionic.min';
import  './lib/ionic-angular';
import 'ngAnimate';
import 'ngSanitize';
import '../../node_modules/@angular/router/angular1/angular_1_router'

import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AppComponent from './app.component';

import AppService from './servies/main';

import './lib/scss/ionic.scss';


angular.module('app', [
        uiRouter,
        'ionic',
        'ngComponentRouter',
        Components.name,
        AppService.name
    ])
    .config(($locationProvider) => {
        "ngInject";

        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
    })

    .component('app', AppComponent)
    .value('$routerRootComponent', 'app');
