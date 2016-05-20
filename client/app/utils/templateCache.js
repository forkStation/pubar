/**
 * Created by wj on 2016/5/20.
 */

import angular from 'angular';
let templateCache = angular.module('app.templateCache', [])
  .run(function ($templateCache) {
    $templateCache.put('templateId.html', 'This is the content of the template');
  });


export default templateCache;
