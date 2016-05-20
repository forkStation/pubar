import template from './<%= name %>.jade';
import controller from './<%= name %>.controller';
import './<%= name %>.less';

let <%= name %>Component = {
  restrict: 'E',
  bindings: {},
  template:template(),
  controller,
  controllerAs: 'vm'
};

export default <%= name %>Component;
