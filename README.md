Version 0.0.1

A very basic angular directive to connect a set of controls to cause the page to start scrolling.  The goal is to have an appropriate template so one can call this as an element with the necessary attribute.  In its current state the following setup needs to occur.

Dependency: jQuery 1.9+

HTML:
<body ng-controller="ModerationCtrl" data-auto-scroll="true" data-auto-scroll-mode="autoScrollMode" data-auto-scroll-speed="autoScrollSpeed">
   <div>
      Scroll Speed: <input type="text" ng-model="autoScrollSpeed" />
      <span ng-click="setAutoScrollMode(true)">Start</span> | <span ng-click="setAutoScrollMode(false)">Stop</span>
  </div>
</body>

JS:
Within your app definition, be sure to inject 'auto-scroll' as a dependency.
