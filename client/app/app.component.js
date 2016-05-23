import template from './app.jade';
import './app.scss';

let appComponent = {
    template: template(),
    restrict: 'E',
    controller: function () {
        "ngInject";
        this.name = 'wj';
    },
    controllerAs: 'vm',
    $routeConfig: [
        {path: '/crisis-center/...', name: 'CrisisCenter', component: 'crisisCenter', useAsDefault: true},
        {path: '/heroes/...', name: 'Heroes', component: 'heroes' }
    ]
};

export default appComponent;
