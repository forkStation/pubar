import template from './crisisCenterList.jade';
import controller from './crisisCenterList.controller';
import './crisisCenterList.scss';

let crisisCenterListComponent = {
    restrict: 'E',
    bindings: {$router: '<'},
    template: template(),
    controller,
    controllerAs: 'vm',
    $canActivate: function ($nextInstruction, $prevInstruction) {
        console.log('$canActivate', arguments);
    }
};

export default crisisCenterListComponent;
