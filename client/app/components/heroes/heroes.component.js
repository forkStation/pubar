import template from './heroes.jade';
import controller from './heroes.controller';
import './heroes.scss';

let heroesComponent = {
    restrict: 'E',
    bindings: {},
    template: template(),
    controller,
    controllerAs: 'vm',
    $routeConfig: [
        {path: '/', name: 'HeroList', component: 'heroesList', useAsDefault: true},
        {path: '/:id', name: 'HeroDetail', component: 'heroesDetail'}
    ]
};

export default heroesComponent;
