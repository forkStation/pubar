import template from './app.jade';
import './app.scss';

let appComponent = {
    template: template(),
    restrict: 'E',
    controller: function ($ionicPopup) {
        "ngInject";

        this.name = 'wj';

        $ionicPopup.show({
            template: 'aaa',
            title: 'wj'
        })

    },
    controllerAs: 'vm'
};

export default appComponent;
