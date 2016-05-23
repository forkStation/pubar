import angular from 'angular';
import crisisCenterListComponent from './crisisCenterList.component';

let crisisCenterListModule = angular.module('crisisCenterList', [])

    .component('crisisCenterList', crisisCenterListComponent);

export default crisisCenterListModule;
