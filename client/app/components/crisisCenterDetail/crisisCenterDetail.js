import angular from 'angular';
import crisisCenterDetailComponent from './crisisCenterDetail.component';

let crisisCenterDetailModule = angular.module('crisisCenterDetail', [])
.component('crisisCenterDetail', crisisCenterDetailComponent);

export default crisisCenterDetailModule;
