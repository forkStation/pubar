import angular from 'angular';
import crisisCenterModule from './crisisCenter/crisisCenter';
import heroesModule from './heroes/heroes';
import crisisCenterDetailModule from './crisisCenterDetail/crisisCenterDetail';
import crisisCenterListModule from  './crisisCenterList/crisisCenterList'
import heroesListModule from  './heroesList/heroesList'
import heroesDetailModule from './heroesDetail/heroesDetail'

let componentModule = angular.module('app.components', [
    crisisCenterModule.name,
    heroesModule.name,
    crisisCenterDetailModule.name,
    crisisCenterListModule.name,
    heroesListModule.name,
    heroesDetailModule.name
]);

export default componentModule;
