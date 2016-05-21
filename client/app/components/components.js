import angular from 'angular';
import Home from './home/home';
import Text from './text/text';
import About from './about/about';

let componentModule = angular.module('app.components', [
  Home.name,
  Text.name,
  About.name
]);

export default componentModule;
