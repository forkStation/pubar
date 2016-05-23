import template from './heroesDetail.jade';
import controller from './heroesDetail.controller';
import './heroesDetail.scss';

let heroesDetailComponent = {
    restrict: 'E',
    bindings: {
        $router: '<'
    },
    template: template(),
    controller,
    controllerAs: 'vm'
   /* $routeConfig: [
        {path: '/', name: '<%= name % >', component: '<%= name % >', useAsDefault: true},
        {path: '/:id', name: '<%= name % >', component: '<%= name % >'}
    ]*/
};

export default heroesDetailComponent;
