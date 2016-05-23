import angular from 'angular';
import heroesComponent from './heroes.component';

let heroesModule = angular.module('heroes', [])

.component('heroes', heroesComponent);

export default heroesModule;
