'use strict'

var autoScrollModule = angular.module('auto-scroll', []);

autoScrollModule.directive('autoScroll', [function() {
    return {
        controller: function($scope) {
            $scope.autoScrollSpeed = 1;
            $scope.autoScrollMode = false;

            $scope.setAutoScrollMode = function(mode) {
                if (mode == true) {
                    $scope.autoScrollMode = true;
                } else if (mode == false) {
                    $scope.autoScrollMode = false;
                }
            }
        }, 
        link: function(scope, element, attrs) {
            var speed;

            function pageScroll() {
                $('body').animate({ scrollTop: $('body').height() }, speed, 'linear', function() {
                    scope.setAutoScrollMode(false);
                    if (!scrollBarIsAtBottom()) {
                        scope.setAutoScrollMode(true);
                    }
                });    
            }

            function stopScroll() {
                $('body').stop();
            }
            
            function scrollBarIsAtBottom() {
                return $('body').scrollTop() == ($(document).height()-$(window).height());
            }

            scope.$watch(attrs.autoScrollMode, function(value) {
                console.log('autoScrollMode was changed to ' + value);
                if (value == true) {
                    pageScroll();
                } else {
                    stopScroll();
                }
            });

            scope.$watch(attrs.autoScrollSpeed, function(value) {
                stopScroll();
                speed = parseInt(value);
            });
        }
    }
}]);
