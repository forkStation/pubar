import angular from 'angular';
import heroesListComponent from './heroesList.component';

let heroesListModule = angular.module('heroesList', [])
.component('heroesList', heroesListComponent);

export default heroesListModule;
