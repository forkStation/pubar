import template from './app.jade';
import './app.scss';

let appComponent = {
    template: template(),
    restrict: 'E',
    controller: function ($http) {
        "ngInject";
        this.name = 'wj';
        $http({
            method: 'GET',
            url: '/api/login'
        }).then(function (res) {
            console.log(res,'das');
        })


    },
    controllerAs: 'vm',
    $routeConfig: [
        {path: '/crisis-center/...', name: 'CrisisCenter', component: 'crisisCenter', useAsDefault: true},
        {path: '/heroes/...', name: 'Heroes', component: 'heroes' }
    ]
};

export default appComponent;
