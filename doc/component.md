# Advantages of Components:

- simpler configuration than plain directives
- promote sane defaults and best practices
- optimized for component-based architecture
- writing component directives will make it easier to upgrade to Angular 2

## 优点
- 比directive配置简单
- 提供组件化的最佳实践
- 优化，以及更方便的升级成ng2


# When not to use Components:

- for directives that rely on DOM manipulation, adding event listeners etc, because the compile and link functions are unavailable
- when you need advanced directive definition options like priority, terminal, multi-element
- when you want a directive that is triggered by an attribute or CSS class, rather than an element

## 什么时候不该使用

- 不应该在component里面操作dom，因为移除了link和compile
- 不能使用`priority`,`terminal`和`multi-element`
- 不能使用`ECMA`中间的 `AC`


# API
如何使用component

    //heroDetail.component.js

    function HeroDetailController() {

    }

    angular.module('heroApp').component('heroDetail', {
      templateUrl: 'heroDetail.html',
      controller: HeroDetailController,
      bindings: {
        hero: '='
      }
    });

    //index.html
    <div ng-controller="mainCtrl as ctrl">
     <b>Hero</b><br>
     <hero-detail hero="ctrl.hero"></hero-detail>
    </div>

    //heroDetail.html
    <span>Name: {{$ctrl.hero.name}}</span>

	Directive	Component


## 与directive的对比

<table class="ng-scope table table-bordered table-striped code-table">
<thead>
<tr>
<th></th>
<th>Directive</th>
<th>Component</th>
</tr>
</thead>
<tbody>
<tr>
<td>bindings</td>
<td>No</td>
<td>Yes (binds to controller)</td>
</tr>
<tr>
<td>bindToController</td>
<td>Yes (default: false)</td>
<td>No (use bindings instead)</td>
</tr>
<tr>
<td>compile function</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>controller</td>
<td>Yes</td>
<td>Yes (default <code><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{}</span></code>)</td>
</tr>
<tr>
<td>controllerAs</td>
<td>Yes (default: false)</td>
<td>Yes (default: <code><span class="pln">$ctrl</span></code>)</td>
</tr>
<tr>
<td>link functions</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>multiElement</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>priority</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>require</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>restrict</td>
<td>Yes</td>
<td>No (restricted to elements only)</td>
</tr>
<tr>
<td>scope</td>
<td>Yes (default: false)</td>
<td>No (scope is always isolate)</td>
</tr>
<tr>
<td>template</td>
<td>Yes</td>
<td>Yes, injectable</td>
</tr>
<tr>
<td>templateNamespace</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>templateUrl</td>
<td>Yes</td>
<td>Yes, injectable</td>
</tr>
<tr>
<td>terminal</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>transclude</td>
<td>Yes (default: false)</td>
<td>Yes (default: false)</td>
</tr>
</tbody>
</table>


---

tips:

- scope始终被隔离
- controllerAs始终生效
- template可以被注入（值得关注）


# 基于component的应用开发

>**Components only control their own View and Data**: Components should never modify any data or DOM that is out of their own scope. Normally, in Angular it is possible to modify data anywhere in the application through scope inheritance and watches. This is practical, but can also lead to problems when it is not clear which part of the application is responsible for modifying the data. That is why component directives use an isolate scope, so a whole class of scope manipulation is not possible.

Components 仅仅控制它自己的试图和数据；
它不会修改其scope作用域外任何数据和DOM；
而一般的，ng在任何位置都可能会修改数据的值，通过scope的继承和watch；
这是实用的，但是也会导致一些问题：在scope没有被销毁时，可能会产生意外的数据改变；
所以component directive使用独立scope。

>**Components have a well-defined public API - Inputs and Outputs**: However, scope isolation only goes so far, because Angular uses two-way binding. So if you pass an object to a component like this - bindings: {item: '='}, and modify one of its properties, the change will be reflected in the parent component. For components however, only the component that owns the data should modify it, to make it easy to reason about what data is changed, and when. For that reason, components should follow a few simple conventions:

Components 数据绑定分为input和output两类api：

    bindings: {
      hero: '<',
      comment: '@'
    }

其中`<`为单项绑定,component里面对其的修改不会使父scope的数据更新
`=`为双向绑定，绑定的数据同步更新

    bindings: {
      onDelete: '&',
      onUpdate: '&'
    }
`&`为向parent输出事件

    <!-- note that we use kebab-case for bindings in the template as usual -->
    <editable-field on-update="$ctrl.update('location', value)"></editable-field><br>
    <button ng-click="$ctrl.onDelete({hero: $ctrl.hero})">Delete</button>

当component的onDelete函数被调用时，
会调用该回调函数 $ctrl.update('location', value)


## 组件的生命周期

- $onInit() - Called on each controller after all the controllers on an element have been constructed and had their bindings initialized (and before the pre & post linking functions for the directives on this element). This is a good place to put initialization code for your controller.
- $onChanges(changesObj) - Called whenever one-way bindings are updated. The changesObj is a hash whose keys are the names of the bound properties that have changed, and the values are an object of the form { currentValue, previousValue, isFirstChange() }. Use this hook to trigger updates within a component such as cloning the bound value to prevent accidental mutation of the outer value.
- $onDestroy() - Called on a controller when its containing scope is destroyed. Use this hook for releasing external resources, watches and event handlers.
- $postLink() - Called after this controller's element and its children have been linked. Similar to the post-link function this hook can be used to set up DOM event handlers and do direct DOM manipulation. Note that child elements that contain templateUrl directives will not have been compiled and linked since they are waiting for their template to load asynchronously and their own compilation and linking has been suspended until that occurs. This hook can be considered analogous to the ngAfterViewInit and ngAfterContentInit hooks in Angular 2. Since the compilation process is rather different in Angular 1 there is no direct mapping and care should be taken when upgrading.
