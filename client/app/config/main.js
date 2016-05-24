/**
 * Created by wj on 2016/5/24.
 */
import angular from 'angular';
import fixTabs from './fixTabs.config';

export default angular.module('app.config', [])
    .config(fixTabs)