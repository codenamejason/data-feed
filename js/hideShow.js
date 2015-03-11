angular
.module('hsapp', ['ngAnimate'])
.controller('ctrl', ctrl)
.controller('gridCtrl', gridCtrl)
.directive('grid', grid)
.directive('item', item);

function ctrl () {
  this.items = generateArray(15);
  this.shown = true;
  this.add   = function () { this.items.push({}); };
  this.sub   = function () { this.items.pop(); };
  
  function generateArray (count) {
    var arr = [];
    while (count--) arr.push({});
    return arr;
  }
}

function gridCtrl () {
  var queue = [];

  this.scope = null;
  this.element = null;

  this.init = function (scope, element) {
    this.scope = scope;
    this.element = element;
    //-- process queue
    while (queue.length) queue.pop()();
  };

  this.ready = function (callback) {
    if (this.scope) callback()
    else queue.push(callback);
  };

  this.setDelay = function (item) {
    var left  = item.prop('offsetLeft') - this.element.prop('offsetLeft'),
        top   = item.prop('offsetTop')  - this.element.prop('offsetTop'),
        dist  = Math.sqrt(left * left + top * top),
        delay = dist * 0.75;
    item.css('transition-delay', delay + 'ms');
  };
}

function grid () {
  return {
    controller: 'gridCtrl',
    link: link
  };
  function link (scope, element, attr, ctrl) {
    ctrl.init(scope, element);
  }
}

function item ($timeout, $window) {
  return {
    require: '^grid',
    link: link
  };
  function link (scope, element, attr, ctrl) {
    ctrl.ready(function () {
      ctrl.setDelay(element);
      angular.element($window).on('resize', handleResize);
      function handleResize () {
        $timeout(ctrl.setDelay.bind(ctrl, element), 0, false);
      }
      element.on('$destroy', function () {
        element.off('resize', handleResize);
      });
    });
  }
}