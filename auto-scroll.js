'use strict'

var autoScrollModule = angular.module('auto-scroll', []);

autoScrollModule.directive('autoScroll', [function() {
    return {
        restrict: 'E',
        template: '<div>' +
                    'Speed: <input type="text" ng-model="autoScrollSpeed" /> <hr/>' +
                    'Mode: {{autoScrollMode}} <hr/>' +
                    '<button ng-click="setAutoScrollMode(\'start\')">Start</button>' + 
                    '<button ng-click="setAutoScrollMode(\'stop\')">Stop</button>' +
                  '</div>',
        controller: function($scope, $element, $attrs) {
            $scope.autoScrollSpeed = 1000;
            $scope.autoScrollMode = 'stop';

            $scope.setAutoScrollMode = function(mode) {
                $scope.autoScrollMode = mode;
            }
        }, 
        link: function(scope, element, attrs) {
            var speed;

            var pageScroll = function() {
                $('body').animate({ scrollTop: $('body').height() }, {
                    duration: speed,
                    easing: 'linear',
                    step: function() {
                        if (scrollBarIsAtBottom()) {
                            scope.$apply(function() {
                                scope.setAutoScrollMode('stop');
                            });
                        }
                    }, 
                    complete: function() {
                        scope.$apply(function() {
                            scope.setAutoScrollMode('stop');                            
                        });

                        if (!scrollBarIsAtBottom()) {
                            if (scope.autoScrollMode == 'stop') {
                                scope.$apply(function() {
                                    scope.setAutoScrollMode('start');                                    
                                });
                            }
                        }                        
                    }
                });
            }

            var stopScroll = function() {
                $('body').stop();
                scope.setAutoScrollMode('stop');
            }
            
            var scrollBarIsAtBottom = function() {
                return $('body').scrollTop() == ($(document).height()-$(window).height());;
            }

            scope.$watch(attrs.scrollMode, function(value) {
                console.log('Scrollmode changed: ' + value);
                if (value == 'start') {
                    pageScroll();
                } else {
                    stopScroll();
                }
            });

            scope.$watch(attrs.scrollSpeed, function(value) {
                stopScroll();
                speed = parseInt(value, 10);
            });
        }
    }
}]);
