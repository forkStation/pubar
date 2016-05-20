import template from './about.jade';
import controller from './about.controller';
// import './about.styl';

let aboutComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default aboutComponent;
