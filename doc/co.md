

<h1 id="understanding-components" class="ng-scope">Understanding Components</h1>
<p class="ng-scope">In Angular, a Component is a special kind of <a href="guide/directive">directive</a> that uses a simpler
configuration which is suitable for a component-based application structure.</p>
<p class="ng-scope">This makes it easier to write an app in a way that's similar to using Web Components or using Angular
2's style of application architecture.</p>
<p class="ng-scope">Advantages of Components:</p>
<ul class="ng-scope">
<li>simpler configuration than plain directives</li>
<li>promote sane defaults and best practices</li>
<li>optimized for component-based architecture</li>
<li>writing component directives will make it easier to upgrade to Angular 2</li>
</ul>
<p class="ng-scope">When not to use Components:</p>
<ul class="ng-scope">
<li>for directives that rely on DOM manipulation, adding event listeners etc, because the compile
and link functions are unavailable</li>
<li>when you need advanced directive definition options like priority, terminal, multi-element</li>
<li>when you want a directive that is triggered by an attribute or CSS class, rather than an element</li>
</ul>
<h2 id="creating-and-configuring-a-component" class="ng-scope">Creating and configuring a Component</h2>
<p class="ng-scope">Components can be registered using the <code><span class="pun">.</span><span class="pln">component</span><span class="pun">()</span></code> method of an Angular module (returned by <a href="guide/module"><code><span class="pln">angular</span><span class="pun">.</span><span class="kwd">module</span><span class="pun">()</span></code></a>). The method takes two arguments:</p>
<ul class="ng-scope">
<li>The name of the Component (as string).</li>
<li>The Component config object. (Note that, unlike the <code><span class="pun">.</span><span class="pln">directive</span><span class="pun">()</span></code> method, this method does <strong>not</strong> take a factory function.)</li>
</ul>
<p class="ng-scope">

</p><div class="ng-scope">
  <plnkr-opener example-path="examples/example-heroComponentSimple" class="ng-isolate-scope"><button ng-click="plnkr.open($event)" class="btn pull-right"> <i class="glyphicon glyphicon-edit">&nbsp;</i> Edit in Plunker</button> </plnkr-opener>

  <div class="runnable-example ng-scope" path="examples/example-heroComponentSimple" name="heroComponentSimple" module="heroApp"><!-- ngIf: tabs --><nav class="runnable-example-tabs ng-scope" ng-if="tabs">  <!-- ngRepeat: tab in tabs track by $index --><a ng-class="{active:$index==activeTabIndex}" ng-repeat="tab in tabs track by $index" href="" class="btn ng-binding ng-scope" ng-click="setTab($index)">    index.js  </a><!-- end ngRepeat: tab in tabs track by $index --><a ng-class="{active:$index==activeTabIndex}" ng-repeat="tab in tabs track by $index" href="" class="btn ng-binding ng-scope active" ng-click="setTab($index)">    heroDetail.js  </a><!-- end ngRepeat: tab in tabs track by $index --><a ng-class="{active:$index==activeTabIndex}" ng-repeat="tab in tabs track by $index" href="" class="btn ng-binding ng-scope" ng-click="setTab($index)">    index.html  </a><!-- end ngRepeat: tab in tabs track by $index --><a ng-class="{active:$index==activeTabIndex}" ng-repeat="tab in tabs track by $index" href="" class="btn ng-binding ng-scope" ng-click="setTab($index)">    heroDetail.html  </a><!-- end ngRepeat: tab in tabs track by $index --></nav><!-- end ngIf: tabs -->


    <div class="runnable-example-file" name="index.js" language="js" type="js" style="display: none;">
      <pre><code><span class="pln">angular</span><span class="pun">.</span><span class="kwd">module</span><span class="pun">(</span><span class="str">'heroApp'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">[]).</span><span class="pln">controller</span><span class="pun">(</span><span class="str">'mainCtrl'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">hero </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Spawn'</span><span class="pln">
  </span><span class="pun">};</span><span class="pln">
</span><span class="pun">});</span></code></pre>
    </div>

    <div class="runnable-example-file" name="heroDetail.js" language="js" type="js" style="display: block;">
      <pre><code><span class="kwd">function</span><span class="pln"> </span><span class="typ">HeroDetailController</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">

</span><span class="pun">}</span><span class="pln">

angular</span><span class="pun">.</span><span class="kwd">module</span><span class="pun">(</span><span class="str">'heroApp'</span><span class="pun">).</span><span class="pln">component</span><span class="pun">(</span><span class="str">'heroDetail'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  templateUrl</span><span class="pun">:</span><span class="pln"> </span><span class="str">'heroDetail.html'</span><span class="pun">,</span><span class="pln">
  controller</span><span class="pun">:</span><span class="pln"> </span><span class="typ">HeroDetailController</span><span class="pun">,</span><span class="pln">
  bindings</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    hero</span><span class="pun">:</span><span class="pln"> </span><span class="str">'='</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">});</span></code></pre>
    </div>

    <div class="runnable-example-file" name="index.html" language="html" type="html" style="display: none;">
      <pre><code><span class="com">&lt;!-- components match only elements --&gt;</span><span class="pln">
</span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">ng-controller</span><span class="pun">=</span><span class="atv">"mainCtrl as ctrl"</span><span class="tag">&gt;</span><span class="pln">
  </span><span class="tag">&lt;b&gt;</span><span class="pln">Hero</span><span class="tag">&lt;/b&gt;&lt;br&gt;</span><span class="pln">
  </span><span class="tag">&lt;hero-detail</span><span class="pln"> </span><span class="atn">hero</span><span class="pun">=</span><span class="atv">"ctrl.hero"</span><span class="tag">&gt;&lt;/hero-detail&gt;</span><span class="pln">
</span><span class="tag">&lt;/div&gt;</span></code></pre>
    </div>

    <div class="runnable-example-file" name="heroDetail.html" language="html" type="html" style="display: none;">
      <pre><code><span class="tag">&lt;span&gt;</span><span class="pln">Name: {{$ctrl.hero.name}}</span><span class="tag">&lt;/span&gt;</span></code></pre>
    </div>


    <iframe class="runnable-example-frame" src="examples/example-heroComponentSimple/index.html" name="example-heroComponentSimple"></iframe>
  </div>
</div>


<p class="ng-scope"></p>
<p class="ng-scope">It's also possible to add components via <a href="api/ng/provider/$compileProvider#component"><code><span class="pln">$compileProvider</span></code></a> in a module's config phase.</p>
<h3 id="comparison-between-directive-definition-and-component-definition" class="ng-scope">Comparison between Directive definition and Component definition</h3>
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
<h2 id="component-based-application-architecture" class="ng-scope">Component-based application architecture</h2>
<p class="ng-scope">As already mentioned, the component helper makes it easier to structure your application with
a component-based architecture. But what makes a component beyond the options that
the component helper has?</p>
<ul class="ng-scope">
<li><p><strong>Components only control their own View and Data:</strong>
Components should never modify any data or DOM that is out of their own scope. Normally, in Angular
it is possible to modify data anywhere in the application through scope inheritance and watches. This
is practical, but can also lead to problems when it is not clear which part of the application is
responsible for modifying the data. That is why component directives use an isolate scope, so a whole
class of scope manipulation is not possible.</p>
</li>
<li><p><strong>Components have a well-defined public API - Inputs and Outputs:</strong>
However, scope isolation only goes so far, because Angular uses two-way binding. So if you pass
an object to a component like this - <code><span class="pln">bindings</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">item</span><span class="pun">:</span><span class="pln"> </span><span class="str">'='</span><span class="pun">}</span></code>, and modify one of its properties, the
change will be reflected in the parent component. For components however, only the component that owns
the data should modify it, to make it easy to reason about what data is changed, and when. For that reason,
components should follow a few simple conventions:</p>
<ul>
<li>Inputs should be using <code><span class="pln">&lt;</span></code> and <code><span class="pun">@</span></code> bindings. The <code><span class="pln">&lt;</span></code> symbol denotes <a href="api/ng/service/$compile#-scope-">one-way bindings</a> which are
available since 1.5. The difference to <code><span class="pun">=</span></code> is that the bound properties in the component scope are not watched, which means
if you assign a new value to the property in the component scope, it will not update the parent scope. Note however, that both parent
and component scope reference the same object, so if you are changing object properties or array elements in the
component, the parent will still reflect that change.
The general rule should therefore be to never change an object or array property in the component scope.
<code><span class="pun">@</span></code> bindings can be used when the input is a string, especially when the value of the binding doesn't change.<pre><code class="lang-js"><span class="pln">bindings</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  hero</span><span class="pun">:</span><span class="pln"> </span><span class="str">'&lt;'</span><span class="pun">,</span><span class="pln">
  comment</span><span class="pun">:</span><span class="pln"> </span><span class="str">'@'</span><span class="pln">
</span><span class="pun">}</span></code></pre>
</li>
<li>Outputs are realized with <code><span class="pun">&amp;</span></code> bindings, which function as callbacks to component events.<pre><code class="lang-js"><span class="pln">bindings</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  onDelete</span><span class="pun">:</span><span class="pln"> </span><span class="str">'&amp;'</span><span class="pun">,</span><span class="pln">
  onUpdate</span><span class="pun">:</span><span class="pln"> </span><span class="str">'&amp;'</span><span class="pln">
</span><span class="pun">}</span></code></pre>
</li>
<li>Instead of manipulating Input Data, the component calls the correct Output Event with the changed data.
For a deletion, that means the component doesn't delete the <code><span class="pln">hero</span></code> itself, but sends it back to
the owner component via the correct event.<pre><code class="lang-html"><span class="com">&lt;!-- note that we use kebab-case for bindings in the template as usual --&gt;</span><span class="pln">
</span><span class="tag">&lt;editable-field</span><span class="pln"> </span><span class="atn">on-update</span><span class="pun">=</span><span class="atv">"$ctrl.update('location', value)"</span><span class="tag">&gt;&lt;/editable-field&gt;&lt;br&gt;</span><span class="pln">
</span><span class="tag">&lt;button</span><span class="pln"> </span><span class="atn">ng-click</span><span class="pun">=</span><span class="atv">"$ctrl.onDelete({hero: $ctrl.hero})"</span><span class="tag">&gt;</span><span class="pln">Delete</span><span class="tag">&lt;/button&gt;</span></code></pre>
</li>
<li>That way, the parent component can decide what to do with the event (e.g. delete an item or update the properties)<pre><code class="lang-js"><span class="pln">ctrl</span><span class="pun">.</span><span class="pln">deleteHero</span><span class="pun">(</span><span class="pln">hero</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  $http</span><span class="pun">.</span><span class="kwd">delete</span><span class="pun">(...).</span><span class="pln">then</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> idx </span><span class="pun">=</span><span class="pln"> ctrl</span><span class="pun">.</span><span class="pln">list</span><span class="pun">.</span><span class="pln">indexOf</span><span class="pun">(</span><span class="pln">hero</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">idx </span><span class="pun">&gt;=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      ctrl</span><span class="pun">.</span><span class="pln">list</span><span class="pun">.</span><span class="pln">splice</span><span class="pun">(</span><span class="pln">idx</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">});</span><span class="pln">
</span><span class="pun">}</span></code></pre>
</li>
</ul>
</li>
<li><p><strong>Components have a well-defined lifecycle</strong>
Each component can implement "lifecycle hooks". These are methods that will be called at certain points in the life
of the component. The following hook methods can be implemented:</p>
<ul>
<li><code><span class="pln">$onInit</span><span class="pun">()</span></code> - Called on each controller after all the controllers on an element have been constructed and
had their bindings initialized (and before the pre &amp; post linking functions for the directives on
this element). This is a good place to put initialization code for your controller.</li>
<li><code><span class="pln">$onChanges</span><span class="pun">(</span><span class="pln">changesObj</span><span class="pun">)</span></code> - Called whenever one-way bindings are updated. The <code><span class="pln">changesObj</span></code> is a hash whose keys
are the names of the bound properties that have changed, and the values are an object of the form
<code><span class="pun">{</span><span class="pln"> currentValue</span><span class="pun">,</span><span class="pln"> previousValue</span><span class="pun">,</span><span class="pln"> isFirstChange</span><span class="pun">()</span><span class="pln"> </span><span class="pun">}</span></code>. Use this hook to trigger updates within a component such as
cloning the bound value to prevent accidental mutation of the outer value.</li>
<li><code><span class="pln">$onDestroy</span><span class="pun">()</span></code> - Called on a controller when its containing scope is destroyed. Use this hook for releasing
external resources, watches and event handlers.</li>
<li><code><span class="pln">$postLink</span><span class="pun">()</span></code> - Called after this controller's element and its children have been linked. Similar to the post-link
function this hook can be used to set up DOM event handlers and do direct DOM manipulation.
Note that child elements that contain <code><span class="pln">templateUrl</span></code> directives will not have been compiled and linked since
they are waiting for their template to load asynchronously and their own compilation and linking has been
suspended until that occurs.
This hook can be considered analogous to the <code><span class="pln">ngAfterViewInit</span></code> and <code><span class="pln">ngAfterContentInit</span></code> hooks in Angular 2.
Since the compilation process is rather different in Angular 1 there is no direct mapping and care should
be taken when upgrading.</li>
</ul>
</li>
</ul>
<p class="ng-scope">By implementing these methods, your component can hook into its lifecycle.</p>
<ul class="ng-scope">
<li><strong>An application is a tree of components:</strong>
Ideally, the whole application should be a tree of components that implement clearly defined inputs
and outputs, and minimize two-way data binding. That way, it's easier to predict when data changes and what the state
of a component is.</li>
</ul>
<h2 id="example-of-a-component-tree" class="ng-scope">Example of a component tree</h2>
<p class="ng-scope">The following example expands on the simple component example and incorporates the concepts we introduced
above:</p>
<p class="ng-scope">Instead of an ngController, we now have a heroList component that holds the data of
different heroes, and creates a heroDetail for each of them.</p>
<p class="ng-scope">The heroDetail component now contains new functionality:</p>
<ul class="ng-scope">
<li>a delete button that calls the bound <code><span class="pln">onDelete</span></code> function of the heroList component</li>
<li>an input to change the hero location, in the form of a reusable editableField component. Instead
of manipulating the hero object itself, it sends a changeset upwards to the heroDetail, which sends
it upwards to the heroList component, which updates the original data.</li>
</ul>
<p class="ng-scope">

</p><div class="ng-scope">
  <plnkr-opener example-path="examples/example-heroComponentTree" class="ng-isolate-scope"><button ng-click="plnkr.open($event)" class="btn pull-right"> <i class="glyphicon glyphicon-edit">&nbsp;</i> Edit in Plunker</button> </plnkr-opener>

  <div class="runnable-example ng-scope" path="examples/example-heroComponentTree" name="heroComponentTree" module="heroApp"><!-- ngIf: tabs --><nav class="runnable-example-tabs ng-scope" ng-if="tabs">  <!-- ngRepeat: tab in tabs track by $index --><a ng-class="{active:$index==activeTabIndex}" ng-repeat="tab in tabs track by $index" href="" class="btn ng-binding ng-scope active" ng-click="setTab($index)">    index.js  </a><!-- end ngRepeat: tab in tabs track by $index --><a ng-class="{active:$index==activeTabIndex}" ng-repeat="tab in tabs track by $index" href="" class="btn ng-binding ng-scope" ng-click="setTab($index)">    heroList.js  </a><!-- end ngRepeat: tab in tabs track by $index --><a ng-class="{active:$index==activeTabIndex}" ng-repeat="tab in tabs track by $index" href="" class="btn ng-binding ng-scope" ng-click="setTab($index)">    heroDetail.js  </a><!-- end ngRepeat: tab in tabs track by $index --><a ng-class="{active:$index==activeTabIndex}" ng-repeat="tab in tabs track by $index" href="" class="btn ng-binding ng-scope" ng-click="setTab($index)">    editableField.js  </a><!-- end ngRepeat: tab in tabs track by $index --><a ng-class="{active:$index==activeTabIndex}" ng-repeat="tab in tabs track by $index" href="" class="btn ng-binding ng-scope" ng-click="setTab($index)">    index.html  </a><!-- end ngRepeat: tab in tabs track by $index --><a ng-class="{active:$index==activeTabIndex}" ng-repeat="tab in tabs track by $index" href="" class="btn ng-binding ng-scope" ng-click="setTab($index)">    heroList.html  </a><!-- end ngRepeat: tab in tabs track by $index --><a ng-class="{active:$index==activeTabIndex}" ng-repeat="tab in tabs track by $index" href="" class="btn ng-binding ng-scope" ng-click="setTab($index)">    heroDetail.html  </a><!-- end ngRepeat: tab in tabs track by $index --><a ng-class="{active:$index==activeTabIndex}" ng-repeat="tab in tabs track by $index" href="" class="btn ng-binding ng-scope" ng-click="setTab($index)">    editableField.html  </a><!-- end ngRepeat: tab in tabs track by $index --></nav><!-- end ngIf: tabs -->


    <div class="runnable-example-file" name="index.js" language="js" type="js" style="display: block;">
      <pre><code><span class="kwd">var</span><span class="pln"> mode </span><span class="pun">=</span><span class="pln"> angular</span><span class="pun">.</span><span class="kwd">module</span><span class="pun">(</span><span class="str">'heroApp'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">[]);</span></code></pre>
    </div>

    <div class="runnable-example-file" name="heroList.js" language="js" type="js" style="display: none;">
      <pre><code><span class="kwd">function</span><span class="pln"> </span><span class="typ">HeroListController</span><span class="pun">(</span><span class="pln">$scope</span><span class="pun">,</span><span class="pln"> $element</span><span class="pun">,</span><span class="pln"> $attrs</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> ctrl </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">;</span><span class="pln">

  </span><span class="com">// This would be loaded by $http etc.</span><span class="pln">
  ctrl</span><span class="pun">.</span><span class="pln">list </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="pln">
    </span><span class="pun">{</span><span class="pln">
      name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Superman'</span><span class="pun">,</span><span class="pln">
      location</span><span class="pun">:</span><span class="pln"> </span><span class="str">''</span><span class="pln">
    </span><span class="pun">},</span><span class="pln">
    </span><span class="pun">{</span><span class="pln">
      name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Batman'</span><span class="pun">,</span><span class="pln">
      location</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Wayne Manor'</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">];</span><span class="pln">

  ctrl</span><span class="pun">.</span><span class="pln">updateHero </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">hero</span><span class="pun">,</span><span class="pln"> prop</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    hero</span><span class="pun">[</span><span class="pln">prop</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> value</span><span class="pun">;</span><span class="pln">
  </span><span class="pun">};</span><span class="pln">

  ctrl</span><span class="pun">.</span><span class="pln">deleteHero </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">hero</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> idx </span><span class="pun">=</span><span class="pln"> ctrl</span><span class="pun">.</span><span class="pln">list</span><span class="pun">.</span><span class="pln">indexOf</span><span class="pun">(</span><span class="pln">hero</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">idx </span><span class="pun">&gt;=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      ctrl</span><span class="pun">.</span><span class="pln">list</span><span class="pun">.</span><span class="pln">splice</span><span class="pun">(</span><span class="pln">idx</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">};</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

angular</span><span class="pun">.</span><span class="kwd">module</span><span class="pun">(</span><span class="str">'heroApp'</span><span class="pun">).</span><span class="pln">component</span><span class="pun">(</span><span class="str">'heroList'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  templateUrl</span><span class="pun">:</span><span class="pln"> </span><span class="str">'heroList.html'</span><span class="pun">,</span><span class="pln">
  controller</span><span class="pun">:</span><span class="pln"> </span><span class="typ">HeroListController</span><span class="pln">
</span><span class="pun">});</span></code></pre>
    </div>

    <div class="runnable-example-file" name="heroDetail.js" language="js" type="js" style="display: none;">
      <pre><code><span class="kwd">function</span><span class="pln"> </span><span class="typ">HeroDetailController</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> ctrl </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">;</span><span class="pln">

  ctrl</span><span class="pun">.</span><span class="pln">update </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">prop</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    ctrl</span><span class="pun">.</span><span class="pln">onUpdate</span><span class="pun">({</span><span class="pln">hero</span><span class="pun">:</span><span class="pln"> ctrl</span><span class="pun">.</span><span class="pln">hero</span><span class="pun">,</span><span class="pln"> prop</span><span class="pun">:</span><span class="pln"> prop</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">:</span><span class="pln"> value</span><span class="pun">});</span><span class="pln">
  </span><span class="pun">};</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

angular</span><span class="pun">.</span><span class="kwd">module</span><span class="pun">(</span><span class="str">'heroApp'</span><span class="pun">).</span><span class="pln">component</span><span class="pun">(</span><span class="str">'heroDetail'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  templateUrl</span><span class="pun">:</span><span class="pln"> </span><span class="str">'heroDetail.html'</span><span class="pun">,</span><span class="pln">
  controller</span><span class="pun">:</span><span class="pln"> </span><span class="typ">HeroDetailController</span><span class="pun">,</span><span class="pln">
  bindings</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    hero</span><span class="pun">:</span><span class="pln"> </span><span class="str">'&lt;'</span><span class="pun">,</span><span class="pln">
    onDelete</span><span class="pun">:</span><span class="pln"> </span><span class="str">'&amp;'</span><span class="pun">,</span><span class="pln">
    onUpdate</span><span class="pun">:</span><span class="pln"> </span><span class="str">'&amp;'</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">});</span></code></pre>
    </div>

    <div class="runnable-example-file" name="editableField.js" language="js" type="js" style="display: none;">
      <pre><code><span class="kwd">function</span><span class="pln"> </span><span class="typ">EditableFieldController</span><span class="pun">(</span><span class="pln">$scope</span><span class="pun">,</span><span class="pln"> $element</span><span class="pun">,</span><span class="pln"> $attrs</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> ctrl </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">;</span><span class="pln">
  ctrl</span><span class="pun">.</span><span class="pln">editMode </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">

  ctrl</span><span class="pun">.</span><span class="pln">handleModeChange </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">ctrl</span><span class="pun">.</span><span class="pln">editMode</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      ctrl</span><span class="pun">.</span><span class="pln">onUpdate</span><span class="pun">({</span><span class="pln">value</span><span class="pun">:</span><span class="pln"> ctrl</span><span class="pun">.</span><span class="pln">fieldValue</span><span class="pun">});</span><span class="pln">
      ctrl</span><span class="pun">.</span><span class="pln">fieldValueCopy </span><span class="pun">=</span><span class="pln"> ctrl</span><span class="pun">.</span><span class="pln">fieldValue</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    ctrl</span><span class="pun">.</span><span class="pln">editMode </span><span class="pun">=</span><span class="pln"> </span><span class="pun">!</span><span class="pln">ctrl</span><span class="pun">.</span><span class="pln">editMode</span><span class="pun">;</span><span class="pln">
  </span><span class="pun">};</span><span class="pln">

  ctrl</span><span class="pun">.</span><span class="pln">reset </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    ctrl</span><span class="pun">.</span><span class="pln">fieldValue </span><span class="pun">=</span><span class="pln"> ctrl</span><span class="pun">.</span><span class="pln">fieldValueCopy</span><span class="pun">;</span><span class="pln">
  </span><span class="pun">};</span><span class="pln">

  ctrl</span><span class="pun">.</span><span class="pln">$onInit </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// Make a copy of the initial value to be able to reset it later</span><span class="pln">
    ctrl</span><span class="pun">.</span><span class="pln">fieldValueCopy </span><span class="pun">=</span><span class="pln"> ctrl</span><span class="pun">.</span><span class="pln">fieldValue</span><span class="pun">;</span><span class="pln">

    </span><span class="com">// Set a default fieldType</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(!</span><span class="pln">ctrl</span><span class="pun">.</span><span class="pln">fieldType</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      ctrl</span><span class="pun">.</span><span class="pln">fieldType </span><span class="pun">=</span><span class="pln"> </span><span class="str">'text'</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">};</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

angular</span><span class="pun">.</span><span class="kwd">module</span><span class="pun">(</span><span class="str">'heroApp'</span><span class="pun">).</span><span class="pln">component</span><span class="pun">(</span><span class="str">'editableField'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  templateUrl</span><span class="pun">:</span><span class="pln"> </span><span class="str">'editableField.html'</span><span class="pun">,</span><span class="pln">
  controller</span><span class="pun">:</span><span class="pln"> </span><span class="typ">EditableFieldController</span><span class="pun">,</span><span class="pln">
  bindings</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    fieldValue</span><span class="pun">:</span><span class="pln"> </span><span class="str">'&lt;'</span><span class="pun">,</span><span class="pln">
    fieldType</span><span class="pun">:</span><span class="pln"> </span><span class="str">'@?'</span><span class="pun">,</span><span class="pln">
    onUpdate</span><span class="pun">:</span><span class="pln"> </span><span class="str">'&amp;'</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">});</span></code></pre>
    </div>

    <div class="runnable-example-file" name="index.html" language="html" type="html" style="display: none;">
      <pre><code><span class="tag">&lt;hero-list&gt;&lt;/hero-list&gt;</span></code></pre>
    </div>

    <div class="runnable-example-file" name="heroList.html" language="html" type="html" style="display: none;">
      <pre><code><span class="tag">&lt;b&gt;</span><span class="pln">Heroes</span><span class="tag">&lt;/b&gt;&lt;br&gt;</span><span class="pln">
</span><span class="tag">&lt;hero-detail</span><span class="pln"> </span><span class="atn">ng-repeat</span><span class="pun">=</span><span class="atv">"hero in $ctrl.list"</span><span class="pln"> </span><span class="atn">hero</span><span class="pun">=</span><span class="atv">"hero"</span><span class="pln"> </span><span class="atn">on-delete</span><span class="pun">=</span><span class="atv">"$ctrl.deleteHero(hero)"</span><span class="pln"> </span><span class="atn">on-update</span><span class="pun">=</span><span class="atv">"$ctrl.updateHero(hero, prop, value)"</span><span class="tag">&gt;&lt;/hero-detail&gt;</span></code></pre>
    </div>

    <div class="runnable-example-file" name="heroDetail.html" language="html" type="html" style="display: none;">
      <pre><code><span class="tag">&lt;hr&gt;</span><span class="pln">
</span><span class="tag">&lt;div&gt;</span><span class="pln">
  Name: {{$ctrl.hero.name}}</span><span class="tag">&lt;br&gt;</span><span class="pln">
  Location: </span><span class="tag">&lt;editable-field</span><span class="pln"> </span><span class="atn">field-value</span><span class="pun">=</span><span class="atv">"$ctrl.hero.location"</span><span class="pln"> </span><span class="atn">field-type</span><span class="pun">=</span><span class="atv">"text"</span><span class="pln"> </span><span class="atn">on-update</span><span class="pun">=</span><span class="atv">"$ctrl.update('location', value)"</span><span class="tag">&gt;&lt;/editable-field&gt;&lt;br&gt;</span><span class="pln">
  </span><span class="tag">&lt;button</span><span class="pln"> </span><span class="atn">ng-click</span><span class="pun">=</span><span class="atv">"$ctrl.onDelete({hero: $ctrl.hero})"</span><span class="tag">&gt;</span><span class="pln">Delete</span><span class="tag">&lt;/button&gt;</span><span class="pln">
</span><span class="tag">&lt;/div&gt;</span></code></pre>
    </div>

    <div class="runnable-example-file" name="editableField.html" language="html" type="html" style="display: none;">
      <pre><code><span class="tag">&lt;span</span><span class="pln"> </span><span class="atn">ng-switch</span><span class="pun">=</span><span class="atv">"$ctrl.editMode"</span><span class="tag">&gt;</span><span class="pln">
  </span><span class="tag">&lt;input</span><span class="pln"> </span><span class="atn">ng-switch-when</span><span class="pun">=</span><span class="atv">"true"</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"{{$ctrl.fieldType}}"</span><span class="pln"> </span><span class="atn">ng-model</span><span class="pun">=</span><span class="atv">"$ctrl.fieldValue"</span><span class="tag">&gt;</span><span class="pln">
  </span><span class="tag">&lt;span</span><span class="pln"> </span><span class="atn">ng-switch-default</span><span class="tag">&gt;</span><span class="pln">{{$ctrl.fieldValue}}</span><span class="tag">&lt;/span&gt;</span><span class="pln">
</span><span class="tag">&lt;/span&gt;</span><span class="pln">
</span><span class="tag">&lt;button</span><span class="pln"> </span><span class="atn">ng-click</span><span class="pun">=</span><span class="atv">"$ctrl.handleModeChange()"</span><span class="tag">&gt;</span><span class="pln">{{$ctrl.editMode ? 'Save' : 'Edit'}}</span><span class="tag">&lt;/button&gt;</span><span class="pln">
</span><span class="tag">&lt;button</span><span class="pln"> </span><span class="atn">ng-if</span><span class="pun">=</span><span class="atv">"$ctrl.editMode"</span><span class="pln"> </span><span class="atn">ng-click</span><span class="pun">=</span><span class="atv">"$ctrl.reset()"</span><span class="tag">&gt;</span><span class="pln">Reset</span><span class="tag">&lt;/button&gt;</span></code></pre>
    </div>


    <iframe class="runnable-example-frame" src="examples/example-heroComponentTree/index.html" name="example-heroComponentTree"></iframe>
  </div>
</div>


<p class="ng-scope"></p>
<h2 id="components-as-route-templates" class="ng-scope">Components as route templates</h2>
<p class="ng-scope">Components are also useful as route templates (e.g. when using <a href="api/ngRoute">ngRoute</a>). In a component-based
application, every view is a component:</p>
<pre class="ng-scope"><code class="lang-js"><span class="kwd">var</span><span class="pln"> myMod </span><span class="pun">=</span><span class="pln"> angular</span><span class="pun">.</span><span class="pln">module</span><span class="pun">(</span><span class="str">'myMod'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">[</span><span class="str">'ngRoute'</span><span class="pun">]);</span><span class="pln">
myMod</span><span class="pun">.</span><span class="pln">component</span><span class="pun">(</span><span class="str">'home'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  template</span><span class="pun">:</span><span class="pln"> </span><span class="str">'&lt;h1&gt;Home&lt;/h1&gt;&lt;p&gt;Hello, {{ $ctrl.user.name }} !&lt;/p&gt;'</span><span class="pun">,</span><span class="pln">
  controller</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">user </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'world'</span><span class="pun">};</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
myMod</span><span class="pun">.</span><span class="pln">config</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">$routeProvider</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  $routeProvider</span><span class="pun">.</span><span class="pln">when</span><span class="pun">(</span><span class="str">'/'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    template</span><span class="pun">:</span><span class="pln"> </span><span class="str">'&lt;home&gt;&lt;/home&gt;'</span><span class="pln">
  </span><span class="pun">});</span><span class="pln">
</span><span class="pun">});</span></code></pre>
<p class="ng-scope"><br>
When using <a href="api/ngRoute/provider/$routeProvider">$routeProvider</a>, you can often avoid some
boilerplate, by passing the resolved route dependencies directly to the component. Since 1.5,
ngRoute automatically assigns the resolves to the route scope property <code><span class="pln">$resolve</span></code> (you can also
configure the property name via <code><span class="pln">resolveAs</span></code>). When using components, you can take advantage of this and pass resolves
directly into your component without creating an extra route controller:</p>
<pre class="ng-scope"><code class="lang-js"><span class="kwd">var</span><span class="pln"> myMod </span><span class="pun">=</span><span class="pln"> angular</span><span class="pun">.</span><span class="pln">module</span><span class="pun">(</span><span class="str">'myMod'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">[</span><span class="str">'ngRoute'</span><span class="pun">]);</span><span class="pln">
myMod</span><span class="pun">.</span><span class="pln">component</span><span class="pun">(</span><span class="str">'home'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  template</span><span class="pun">:</span><span class="pln"> </span><span class="str">'&lt;h1&gt;Home&lt;/h1&gt;&lt;p&gt;Hello, {{ $ctrl.user.name }} !&lt;/p&gt;'</span><span class="pun">,</span><span class="pln">
  bindings</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    user</span><span class="pun">:</span><span class="pln"> </span><span class="str">'&lt;'</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
myMod</span><span class="pun">.</span><span class="pln">config</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">$routeProvider</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  $routeProvider</span><span class="pun">.</span><span class="pln">when</span><span class="pun">(</span><span class="str">'/'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    template</span><span class="pun">:</span><span class="pln"> </span><span class="str">'&lt;home user="$resolve.user"&gt;&lt;/home&gt;'</span><span class="pun">,</span><span class="pln">
    resolve</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      user</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">$http</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> $http</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="str">'...'</span><span class="pun">);</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">});</span><span class="pln">
</span><span class="pun">});</span></code></pre>
<h2 id="intercomponent-communication" class="ng-scope">Intercomponent Communication</h2>
<p class="ng-scope">Directives can require the controllers of other directives to enable communication
between each other. This can be achieved in a component by providing an
object mapping for the <code><span class="kwd">require</span></code> property. The object keys specify the property names under which
the required controllers (object values) will be bound to the requiring component's controller.</p>
<div class="alert alert-warning ng-scope">
Note that the required controllers will not be available during the instantiation of the controller,
but they are guaranteed to be available just before the <code><span class="pln">$onInit</span></code> method is executed!
</div>

<p class="ng-scope">Here is a tab pane example built from components:</p>
<p class="ng-scope">

</p><div class="ng-scope">
  <plnkr-opener example-path="examples/example-example7" class="ng-isolate-scope"><button ng-click="plnkr.open($event)" class="btn pull-right"> <i class="glyphicon glyphicon-edit">&nbsp;</i> Edit in Plunker</button> </plnkr-opener>

  <div class="runnable-example ng-scope" path="examples/example-example7" module="docsTabsExample"><!-- ngIf: tabs --><nav class="runnable-example-tabs ng-scope" ng-if="tabs">  <!-- ngRepeat: tab in tabs track by $index --><a ng-class="{active:$index==activeTabIndex}" ng-repeat="tab in tabs track by $index" href="" class="btn ng-binding ng-scope active" ng-click="setTab($index)">    script.js  </a><!-- end ngRepeat: tab in tabs track by $index --><a ng-class="{active:$index==activeTabIndex}" ng-repeat="tab in tabs track by $index" href="" class="btn ng-binding ng-scope" ng-click="setTab($index)">    index.html  </a><!-- end ngRepeat: tab in tabs track by $index --><a ng-class="{active:$index==activeTabIndex}" ng-repeat="tab in tabs track by $index" href="" class="btn ng-binding ng-scope" ng-click="setTab($index)">    my-tabs.html  </a><!-- end ngRepeat: tab in tabs track by $index --><a ng-class="{active:$index==activeTabIndex}" ng-repeat="tab in tabs track by $index" href="" class="btn ng-binding ng-scope" ng-click="setTab($index)">    my-pane.html  </a><!-- end ngRepeat: tab in tabs track by $index --></nav><!-- end ngIf: tabs -->


    <div class="runnable-example-file" name="script.js" language="js" type="js" style="display: block;">
      <pre><code><span class="pln">angular</span><span class="pun">.</span><span class="kwd">module</span><span class="pun">(</span><span class="str">'docsTabsExample'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">[])</span><span class="pln">
</span><span class="pun">.</span><span class="pln">component</span><span class="pun">(</span><span class="str">'myTabs'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  transclude</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
  controller</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> panes </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">panes </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[];</span><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="kwd">select</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">pane</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      angular</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">(</span><span class="pln">panes</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">pane</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        pane</span><span class="pun">.</span><span class="pln">selected </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
      </span><span class="pun">});</span><span class="pln">
      pane</span><span class="pun">.</span><span class="pln">selected </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">};</span><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">addPane </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">pane</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">panes</span><span class="pun">.</span><span class="pln">length </span><span class="pun">===</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="kwd">select</span><span class="pun">(</span><span class="pln">pane</span><span class="pun">);</span><span class="pln">
      </span><span class="pun">}</span><span class="pln">
      panes</span><span class="pun">.</span><span class="pln">push</span><span class="pun">(</span><span class="pln">pane</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">};</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">
  templateUrl</span><span class="pun">:</span><span class="pln"> </span><span class="str">'my-tabs.html'</span><span class="pln">
</span><span class="pun">})</span><span class="pln">
</span><span class="pun">.</span><span class="pln">component</span><span class="pun">(</span><span class="str">'myPane'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  transclude</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
  </span><span class="kwd">require</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    tabsCtrl</span><span class="pun">:</span><span class="pln"> </span><span class="str">'^myTabs'</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">
  bindings</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    title</span><span class="pun">:</span><span class="pln"> </span><span class="str">'@'</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">
  controller</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">$onInit </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">tabsCtrl</span><span class="pun">.</span><span class="pln">addPane</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">);</span><span class="pln">
      console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">};</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">
  templateUrl</span><span class="pun">:</span><span class="pln"> </span><span class="str">'my-pane.html'</span><span class="pln">
</span><span class="pun">});</span></code></pre>
    </div>

    <div class="runnable-example-file" name="index.html" language="html" type="html" style="display: none;">
      <pre><code><span class="tag">&lt;my-tabs&gt;</span><span class="pln">
  </span><span class="tag">&lt;my-pane</span><span class="pln"> </span><span class="atn">title</span><span class="pun">=</span><span class="atv">"Hello"</span><span class="tag">&gt;</span><span class="pln">
    </span><span class="tag">&lt;h4&gt;</span><span class="pln">Hello</span><span class="tag">&lt;/h4&gt;</span><span class="pln">
    </span><span class="tag">&lt;p&gt;</span><span class="pln">Lorem ipsum dolor sit amet</span><span class="tag">&lt;/p&gt;</span><span class="pln">
  </span><span class="tag">&lt;/my-pane&gt;</span><span class="pln">
  </span><span class="tag">&lt;my-pane</span><span class="pln"> </span><span class="atn">title</span><span class="pun">=</span><span class="atv">"World"</span><span class="tag">&gt;</span><span class="pln">
    </span><span class="tag">&lt;h4&gt;</span><span class="pln">World</span><span class="tag">&lt;/h4&gt;</span><span class="pln">
    </span><span class="tag">&lt;em&gt;</span><span class="pln">Mauris elementum elementum enim at suscipit.</span><span class="tag">&lt;/em&gt;</span><span class="pln">
    </span><span class="tag">&lt;p&gt;&lt;a</span><span class="pln"> </span><span class="atn">href</span><span class="pln"> </span><span class="atn">ng-click</span><span class="pun">=</span><span class="atv">"i = i + 1"</span><span class="tag">&gt;</span><span class="pln">counter: {{i || 0}}</span><span class="tag">&lt;/a&gt;&lt;/p&gt;</span><span class="pln">
  </span><span class="tag">&lt;/my-pane&gt;</span><span class="pln">
</span><span class="tag">&lt;/my-tabs&gt;</span></code></pre>
    </div>

    <div class="runnable-example-file" name="my-tabs.html" language="html" type="html" style="display: none;">
      <pre><code><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"tabbable"</span><span class="tag">&gt;</span><span class="pln">
  </span><span class="tag">&lt;ul</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"nav nav-tabs"</span><span class="tag">&gt;</span><span class="pln">
    </span><span class="tag">&lt;li</span><span class="pln"> </span><span class="atn">ng-repeat</span><span class="pun">=</span><span class="atv">"pane in $ctrl.panes"</span><span class="pln"> </span><span class="atn">ng-class</span><span class="pun">=</span><span class="atv">"{active:pane.selected}"</span><span class="tag">&gt;</span><span class="pln">
      </span><span class="tag">&lt;a</span><span class="pln"> </span><span class="atn">href</span><span class="pun">=</span><span class="atv">""</span><span class="pln"> </span><span class="atn">ng-click</span><span class="pun">=</span><span class="atv">"$ctrl.select(pane)"</span><span class="tag">&gt;</span><span class="pln">{{pane.title}}</span><span class="tag">&lt;/a&gt;</span><span class="pln">
    </span><span class="tag">&lt;/li&gt;</span><span class="pln">
  </span><span class="tag">&lt;/ul&gt;</span><span class="pln">
  </span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"tab-content"</span><span class="pln"> </span><span class="atn">ng-transclude</span><span class="tag">&gt;&lt;/div&gt;</span><span class="pln">
</span><span class="tag">&lt;/div&gt;</span></code></pre>
    </div>

    <div class="runnable-example-file" name="my-pane.html" language="html" type="html" style="display: none;">
      <pre><code><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"tab-pane"</span><span class="pln"> </span><span class="atn">ng-show</span><span class="pun">=</span><span class="atv">"$ctrl.selected"</span><span class="pln"> </span><span class="atn">ng-transclude</span><span class="tag">&gt;&lt;/div&gt;</span></code></pre>
    </div>


    <iframe class="runnable-example-frame" src="examples/example-example7/index.html" name="example-example7"></iframe>
  </div>
</div>


<p class="ng-scope"></p>
<h1 id="unit-testing-component-controllers" class="ng-scope">Unit-testing Component Controllers</h1>
<p class="ng-scope">The easiest way to unit-test a component controller is by using the <a href="api/ngMock/service/$componentController">$componentController</a>
that is included in <a href="api/ngMock"><code><span class="pln">ngMock</span></code></a>. The advantage of this method is that you do not have
to create any DOM elements. The following example shows how to do this for the <code><span class="pln">heroDetail</span></code> component
from above.</p>
<p class="ng-scope">The examples use the <a href="http://jasmine.github.io/">Jasmine</a> testing framework.</p>
<p class="ng-scope"><strong>Controller Test:</strong></p>
<pre class="ng-scope"><code class="lang-js"><span class="pln">describe</span><span class="pun">(</span><span class="str">'component: heroDetail'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> component</span><span class="pun">,</span><span class="pln"> scope</span><span class="pun">,</span><span class="pln"> hero</span><span class="pun">,</span><span class="pln"> $componentController</span><span class="pun">;</span><span class="pln">

  beforeEach</span><span class="pun">(</span><span class="pln">module</span><span class="pun">(</span><span class="str">'heroApp'</span><span class="pun">));</span><span class="pln">

  beforeEach</span><span class="pun">(</span><span class="pln">inject</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">$rootScope</span><span class="pun">,</span><span class="pln"> _$componentController_</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    scope </span><span class="pun">=</span><span class="pln"> $rootScope</span><span class="pun">.</span><span class="pln">$new</span><span class="pun">();</span><span class="pln">
    $componentController </span><span class="pun">=</span><span class="pln"> _$componentController_</span><span class="pun">;</span><span class="pln">
    hero </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Wolverine'</span><span class="pun">};</span><span class="pln">
  </span><span class="pun">}));</span><span class="pln">

  it</span><span class="pun">(</span><span class="str">'should assign the name bindings to the hero object'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// Here we are passing actual bindings to the component</span><span class="pln">
    component </span><span class="pun">=</span><span class="pln"> $componentController</span><span class="pun">(</span><span class="str">'heroDetail'</span><span class="pun">,</span><span class="pln">
      </span><span class="kwd">null</span><span class="pun">,</span><span class="pln">
      </span><span class="pun">{</span><span class="pln">hero</span><span class="pun">:</span><span class="pln"> hero</span><span class="pun">}</span><span class="pln">
    </span><span class="pun">);</span><span class="pln">
    expect</span><span class="pun">(</span><span class="pln">component</span><span class="pun">.</span><span class="pln">hero</span><span class="pun">.</span><span class="pln">name</span><span class="pun">).</span><span class="pln">toBe</span><span class="pun">(</span><span class="str">'Wolverine'</span><span class="pun">);</span><span class="pln">
  </span><span class="pun">});</span><span class="pln">

  it</span><span class="pun">(</span><span class="str">'should call the onDelete binding when a hero is deleted'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> deleteSpy </span><span class="pun">=</span><span class="pln"> jasmine</span><span class="pun">.</span><span class="pln">createSpy</span><span class="pun">(</span><span class="str">'deleteSpy'</span><span class="pun">);</span><span class="pln">
    component </span><span class="pun">=</span><span class="pln"> $componentController</span><span class="pun">(</span><span class="str">'heroDetail'</span><span class="pun">,</span><span class="pln">
      </span><span class="kwd">null</span><span class="pun">,</span><span class="pln">
      </span><span class="pun">{</span><span class="pln">hero</span><span class="pun">:</span><span class="pln"> hero</span><span class="pun">,</span><span class="pln"> onDelete</span><span class="pun">:</span><span class="pln"> deleteSpy</span><span class="pun">}</span><span class="pln">
    </span><span class="pun">);</span><span class="pln">

    component</span><span class="pun">.</span><span class="pln">onDelete</span><span class="pun">({</span><span class="pln">hero</span><span class="pun">:</span><span class="pln"> component</span><span class="pun">.</span><span class="pln">hero</span><span class="pun">});</span><span class="pln">
    expect</span><span class="pun">(</span><span class="pln">deleteSpy</span><span class="pun">).</span><span class="pln">toHaveBeenCalledWith</span><span class="pun">({</span><span class="pln">hero</span><span class="pun">:</span><span class="pln"> component</span><span class="pun">.</span><span class="pln">hero</span><span class="pun">});</span><span class="pln">
  </span><span class="pun">});</span><span class="pln">

</span><span class="pun">});</span></code></pre>


</div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <p class="pull-right"><a back-to-top="">Back to top</a></p>

        <p>
          Super-powered by Google  ©2010-2016
          ( <a id="version" ng-href="https://github.com/angular/angular.js/blob/master/CHANGELOG.md#1.5.5" ng-bind-template="v1.5.5  material-conspiration" title="Changelog of this version of Angular JS" class="ng-binding" href="https://github.com/angular/angular.js/blob/master/CHANGELOG.md#1.5.5">v1.5.5  material-conspiration</a>
          )
        </p>
        <p>
          Code licensed under the
          <a href="https://github.com/angular/angular.js/blob/master/LICENSE" target="_blank">The
            MIT License</a>. Documentation licensed under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.
        </p>
      </div>
    </footer>
  </div>

