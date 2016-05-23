import template from './heroesList.jade';
import controller from './heroesList.controller';
import './heroesList.scss';

let heroesListComponent = {
    restrict: 'E',
    bindings: {},
    template: template(),
    controller,
    controllerAs: 'vm',
   /* $routeConfig: [
        {path: '/', name: '<%= name % >', component: '<%= name % >', useAsDefault: true},
        {path: '/:id', name: '<%= name % >', component: '<%= name % >'}
    ]*/
};

export default heroesListComponent;
