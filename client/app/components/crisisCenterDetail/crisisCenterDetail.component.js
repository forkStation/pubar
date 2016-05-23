import template from './crisisCenterDetail.jade';
import controller from './crisisCenterDetail.controller';
import './crisisCenterDetail.scss';

let crisisCenterDetailComponent = {
  restrict: 'E',
  bindings: { $router: '<'},
  template:template(),
  controller,
  controllerAs: 'vm'
};

export default crisisCenterDetailComponent;
