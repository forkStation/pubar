import angular from 'angular';
import crisisCenterComponent from './crisisCenter.component';

let crisisCenterModule = angular.module('crisisCenter', [])
    .component('crisisCenter', crisisCenterComponent);

export default crisisCenterModule;
