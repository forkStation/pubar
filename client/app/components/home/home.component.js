import template from './home.jade';
import controller from './home.controller';
 import './home.scss';

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template:template(),
  controller,
  controllerAs: 'vm'
};

export default homeComponent;
