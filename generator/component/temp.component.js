import template from './<%= name %>.jade';
import controller from './<%= name %>.controller';
import './<%= name %>.scss';

let <%= name %>Component = {
  restrict: 'E',
  bindings: {},
  template:template(),
  controller,
  controllerAs: 'vm',
    /* $routeConfig: [
     {path: '/', name: '<%= name %>', component: '<%= name % >', useAsDefault: true},
     {path: '/:id', name: '<%= name %>', component: '<%= name % >'}
     ]*/
};

export default <%= name %>Component;
