import angular from 'angular';
import heroesDetailComponent from './heroesDetail.component';

let heroesDetailModule = angular.module('heroesDetail', [])
.component('heroesDetail', heroesDetailComponent);

export default heroesDetailModule;
