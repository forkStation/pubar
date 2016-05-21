import template from './text.jade';
import controller from './text.controller';
import './text.scss';

let textComponent = {
  restrict: 'E',
  bindings: {
    create:'<',
    create2:'=',
    onDelete:'&'
  },
  template:template(),
  controller,
  controllerAs: 'vm'
};

export default textComponent;
