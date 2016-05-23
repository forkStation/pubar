import template from './crisisCenter.jade';
import controller from './crisisCenter.controller';
import './crisisCenter.scss';

let crisisCenterComponent = {
    restrict: 'E',
    bindings: {},
    template: template(),
    controller,
    controllerAs: 'vm',
    $routeConfig: [
        {path: '/', name: 'CrisisCenterList', component: 'crisisCenterList', useAsDefault: true},
        {path: '/:id', name: 'CrisisCenterDetail', component: 'crisisCenterDetail'}
    ]
};

export default crisisCenterComponent;
