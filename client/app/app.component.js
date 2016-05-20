import template from './app.jade';
import './app.less';

let appComponent = {
  template:template(),
  restrict: 'E',
  controller:function () {
    this.name='wj';
  },
  controllerAs:'vm'
}; 

export default appComponent;
