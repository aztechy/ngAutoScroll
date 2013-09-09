Version 0.0.1

A very basic angular directive to connect a set of controls to cause the page to start scrolling.  The goal is to have an appropriate template so one can call this as an element with the necessary attribute.  In its current state the following setup needs to occur.

Dependency: jQuery 1.9+

HTML:
<body ng-controller="exampleCtrl">
  <auto-scroll scroll-mode="autoScrollMode" scroll-speed="autoScrollSpeed"></auto-scroll>
</body>

JS:
Within your app definition, be sure to inject 'auto-scroll' as a dependency.
