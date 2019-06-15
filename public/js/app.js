/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_emergence_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_emergence_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_emergence_js__);


//toggleClass
var toggleClass = function toggleClass(node, className) {
  var classNames = className.trim().split(/\s+/),
      nodeClass = (node.getAttribute('class') || '').trim(),
      nodeClassNames = nodeClass.split(/\s+/),
      i = classNames.length;

  while (i--) {
    var index = nodeClassNames.indexOf(classNames[i]);
    if (~index) {
      classNames.splice(i, 1);
      nodeClassNames.splice(index, 1);
    }
  }
  nodeClassNames = nodeClassNames.concat(classNames);
  node.setAttribute('class', nodeClassNames.join(' '));
};

//hasClass
var hasClass = function hasClass(node, className) {
  if (node.classList) {
    return node.classList.contains(className.trim());
  }
  return new RegExp('(^| )' + className + '( |$)', 'g').test(node.className.trim());
};

//sticky
var stickyHeight = function stickyHeight() {
  var headerHeight = document.getElementById('header').offsetHeight + 'px';
  document.getElementById('sticky').style.height = headerHeight;
  document.getElementById('gNav').style.top = headerHeight;
};
stickyHeight();

//menu
var spMenu = function spMenu() {
  toggleClass(document.getElementById('sp-menu').querySelector('i'), 'fa-times');
  toggleClass(document.getElementById('gNav'), 'isActive');
};
document.getElementById('sp-menu').addEventListener('click', function () {
  spMenu();
}, false);

var removeIsActive = function removeIsActive() {
  document.getElementById('gNav').classList.remove('isActive');
  document.getElementById('sp-menu').querySelector('i').classList.remove('fa-times');
};

//resize
var _resizeEvent = void 0;
window.onresize = function () {
  clearTimeout(_resizeEvent);
  _resizeEvent = setTimeout(function () {
    stickyHeight();
    removeIsActive();
  }, 50);
};

//chart
if (document.getElementById('about')) {
  var chartFunc = function chartFunc(id, blue, gray) {
    var chartjs = new Chart(id, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [blue, gray],
          backgroundColor: ['rgba(82, 202, 255, 1)', 'rgba(206, 206, 206, 1)'],
          borderWidth: 0
        }]
      },
      options: {
        tooltips: {
          enabled: false
        },
        hover: {
          mode: null
        },
        cutoutPercentage: 75,
        plugins: {
          deferred: {
            yOffset: '80%',
            delay: 200
          }
        }
      }
    });
  };
  var ctx_html = document.getElementsByClassName("per-html");
  chartFunc(ctx_html, 11, 1);
  var ctx_css = document.getElementsByClassName("per-css");
  chartFunc(ctx_css, 11, 1);
  var ctx_sass = document.getElementsByClassName("per-sass");
  chartFunc(ctx_sass, 10, 2);
  var ctx_ps = document.getElementsByClassName("per-ps");
  chartFunc(ctx_ps, 10, 2);
  var ctx_dw = document.getElementsByClassName("per-dw");
  chartFunc(ctx_dw, 10, 2);
  var ctx_ai = document.getElementsByClassName("per-ai");
  chartFunc(ctx_ai, 9, 3);
  var ctx_pug = document.getElementsByClassName("per-pug");
  chartFunc(ctx_pug, 9, 3);
  var ctx_git = document.getElementsByClassName("per-git");
  chartFunc(ctx_git, 8, 4);
  var ctx_lm = document.getElementsByClassName("per-lm");
  chartFunc(ctx_lm, 7, 5);
  var ctx_npm = document.getElementsByClassName("per-npm");
  chartFunc(ctx_npm, 7, 5);
  var ctx_gulp = document.getElementsByClassName("per-gulp");
  chartFunc(ctx_gulp, 7, 5);
  var ctx_jq = document.getElementsByClassName("per-jq");
  chartFunc(ctx_jq, 6, 6);
  var ctx_xd = document.getElementsByClassName("per-xd");
  chartFunc(ctx_xd, 6, 6);
  var ctx_pr = document.getElementsByClassName("per-pr");
  chartFunc(ctx_pr, 6, 6);
  var ctx_ae = document.getElementsByClassName("per-ae");
  chartFunc(ctx_ae, 3, 9);
  var ctx_js = document.getElementsByClassName("per-js");
  chartFunc(ctx_js, 3, 9);
}

// pagetop
var pageTopBtn = document.getElementById('pagetop');
pageTopBtn.addEventListener("click", function foo() {
  var nowY = window.pageYOffset;
  window.scrollTo(0, Math.floor(nowY * 0.8));
  if (nowY > 0) {
    window.setTimeout(foo, 10);
  }
});

// pagetop をスクロールしてから表示
window.addEventListener('scroll', function () {
  //高さを取得して表示
  var scrollTop = document.scrollingElement.scrollTop;
  if (scrollTop > 100) {
    document.getElementById('pagetop').classList.add('show');
  } else if (scrollTop < 100) {
    document.getElementById('pagetop').classList.remove('show');
  }
}, false);

//emergence
__WEBPACK_IMPORTED_MODULE_0_emergence_js___default.a.init({
  offsetTop: 100,
  offsetBottom: 100
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
  // AMD
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return factory(root);
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node.js or CommonJS
    module.exports = factory;
  } else {
    // Browser globals
    root.emergence = factory(root);
  }
})(this, function(root) {

  'use strict';

  var emergence = {};
  var poll, container, throttle, reset, handheld, elemCushion, offsetTop, offsetRight, offsetBottom, offsetLeft;
  var callback = function() {};

  // Browser feature test to include any browser APIs required for >= IE8
  // @return {bool} true if supported, otherwise false
  var cutsTheMustard = function() {
    return 'querySelectorAll' in document ? true : false;
  };

  // Checks if user is on a handheld
  // @return {bool} true if it's a handheld, otherwise false
  var isHandheld = function() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(
      navigator.userAgent
    );
  };

  // Get the offset of a DOM Element
  // @param {DOMElement} elem the container or element
  // @return {int} the top, left, width and height values in pixels
  var getElemOffset = function(elem) {

    // Width and height of container or element
    var w = elem.offsetWidth;
    var h = elem.offsetHeight;

    // Default top and left position of container or element
    var topPos = 0;
    var leftPos = 0;

    // Get total distance of container or element to document's top and left origin
    do {
      if (!isNaN(elem.offsetTop)) {
        topPos += elem.offsetTop;
      }
      if (!isNaN(elem.offsetLeft)) {
        leftPos += elem.offsetLeft;
      }
    } while ((elem = elem.offsetParent) !== null);

    // Return dimensions and position
    return {
      width: w,
      height: h,
      top: topPos,
      left: leftPos
    };
  };

  // Get the custom container size if provided, otherwise the documents
  // @return {int} the width and height in pixels
  var getContainerSize = function(container) {
    var w, h;

    // If custom container is provided in options
    // Else use window or document
    if (container !== window) {
      w = container.clientWidth;
      h = container.clientHeight;
    } else {
      w = window.innerWidth || document.documentElement.clientWidth;
      h = window.innerHeight || document.documentElement.clientHeight;
    }

    return {
      width: w,
      height: h
    };
  };

  // Get the X and Y scroll positions
  // @return {int} the X and Y values in pixels
  var getContainerScroll = function(container) {

    // If custom container is provided in options
    // Else use window or document
    if (container !== window) {
      return {
        x: container.scrollLeft + getElemOffset(container).left,
        y: container.scrollTop + getElemOffset(container).top
      };
    } else {
      return {
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: window.pageYOffset || document.documentElement.scrollTop
      };
    }
  };

  // Check if element's closest parent is hidden (display: none)
  // @param {DOMElement} elem the element
  // @return {bool} true if hidden, false otherwise
  var isHidden = function(elem) {
    return elem.offsetParent === null;
  };

  // Check if element is visible
  // @param {DOMElement} elem the element
  var isVisible = function(elem) {

    // Discontinue if element's closest parent is hidden
    if (isHidden(elem)) {
      return false;
    }

    // Get information from element and container
    var elemOffset = getElemOffset(elem);
    var containerSize = getContainerSize(container);
    var containerScroll = getContainerScroll(container);

    // Determine element size
    var elemWidth = elemOffset.width;
    var elemHeight = elemOffset.height;

    // Determine element position from rect points
    var elemTop = elemOffset.top;
    var elemLeft = elemOffset.left;
    var elemBottom = elemTop + elemHeight;
    var elemRight = elemLeft + elemWidth;

    // Determine boundaries of container and element
    // @return {bool} true if element is found within boundaries, otherwise false
    var checkBoundaries = function() {

      // Determine element boundaries including custom cushion
      var eTop = elemTop + elemHeight * elemCushion;
      var eRight = elemRight - elemWidth * elemCushion;
      var eBottom = elemBottom - elemHeight * elemCushion;
      var eLeft = elemLeft + elemWidth * elemCushion;

      // Determine container boundaries including custom offset
      var cTop = containerScroll.y + offsetTop;
      var cRight = containerScroll.x - offsetRight + containerSize.width;
      var cBottom = containerScroll.y - offsetBottom + containerSize.height;
      var cLeft = containerScroll.x + offsetLeft;

      return (eTop < cBottom && eBottom > cTop && eLeft < cRight && eRight > cLeft);
    };

    return checkBoundaries();
  };

  // Engage emergence through a throttling method for performance
  var emergenceThrottle = function() {
    if (!!poll) {
      return;
    }
    clearTimeout(poll);
    poll = setTimeout(function() {
      emergence.engage();
      poll = null;
    }, throttle);
  };

  // Initialize emergence with options, do feature test and create event listeners
  // @param {Object} options Custom settings
  emergence.init = function(options) {
    options = options || {};

    // Function to return an integer
    var optionInt = function(option, fallback) {
      return parseInt(option || fallback, 10);
    };

    // Function to return a floating point number
    var optionFloat = function(option, fallback) {
      return parseFloat(option || fallback);
    };

    // Default options
    container = options.container || window; // window or document by default
    reset = typeof options.reset !== 'undefined' ? options.reset : true; // true by default
    handheld = typeof options.handheld !== 'undefined' ? options.handheld : true; // true by default
    throttle = optionInt(options.throttle, 250); // 250 by default
    elemCushion = optionFloat(options.elemCushion, 0.15); // 0.15 by default
    offsetTop = optionInt(options.offsetTop, 0); // 0 by default
    offsetRight = optionInt(options.offsetRight, 0); // 0 by default
    offsetBottom = optionInt(options.offsetBottom, 0); // 0 by default
    offsetLeft = optionInt(options.offsetLeft, 0); // 0 by default
    callback = options.callback || callback;

    // If browser doesn't pass feature test
    if (!cutsTheMustard()) {

      // Provide message in console.log
      console.log('Emergence.js is not supported in this browser.');

    }
    // If this is handheld device AND handheld option is true
    // OR not a handheld device
    else if ((isHandheld() && handheld) || !isHandheld()) {

      // Add '.emergence' class to document for conditional CSS
      document.documentElement.className += ' emergence';

      // If browser supports addEventListener
      // Else use attachEvent
      if (window.addEventListener) {

        // Add event listeners for load, scroll and resize events
        window.addEventListener('load', emergenceThrottle, false);
        container.addEventListener('scroll', emergenceThrottle, false);
        container.addEventListener('resize', emergenceThrottle, false);

      } else {

        // Attach events for legacy load method, scroll and resize events
        document.attachEvent('onreadystatechange', function() {
          if (document.readyState === 'complete') { emergenceThrottle(); }
        });
        container.attachEvent('onscroll', emergenceThrottle);
        container.attachEvent('onresize', emergenceThrottle);

      }
    }
  };

  // Engage emergence
  emergence.engage = function() {
    var nodes = document.querySelectorAll('[data-emergence]');
    var length = nodes.length;
    var elem;

    // Loop through objects with data-emergence attribute
    for (var i = 0; i < length; i++) {
      elem = nodes[i];

      // If element is visible
      if (isVisible(elem)) {

        // Change the state of the attribute to 'visible'
        elem.setAttribute('data-emergence', 'visible');

        // Hack to repaint attribute in IE8
        elem.className = elem.className;

        // Callback for when element is visible
        callback(elem, 'visible');

      } else if (reset === true) {

        // Else if element is hidden and reset
        // Change the state of the attribute to 'hidden'
        elem.setAttribute('data-emergence', 'hidden');

        // Hack to repaint attribute in IE8
        elem.className = elem.className;

        // Create callback
        callback(elem, 'reset');

      } else if (reset === false) {

        // Else if element is hidden and NOT reset
        // Create callback
        callback(elem, 'noreset');

      }
    }
    
    // If no data-emergence attributes are found
    // Disengage emergence
    if (!length) {
      emergence.disengage();
    }
  };

  // Disengage emergence
  emergence.disengage = function() {

    // If browser supports removeEventListener
    // Else use detachEvent
    if (window.removeEventListener) {

      // Remove event listeners scroll and resize events
      container.removeEventListener('scroll', emergenceThrottle, false);
      container.removeEventListener('resize', emergenceThrottle, false);

    } else {

      // Detach scroll and resize events
      container.detachEvent('onscroll', emergenceThrottle);
      container.detachEvent('onresize', emergenceThrottle);

    }

    // Clear timeout from throttle
    clearTimeout(poll);
  };

  return emergence;
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWE4Mjg3ZDc2YmU4YjRkOTY4MGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW1lcmdlbmNlLmpzL3NyYy9lbWVyZ2VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGUuc2Fzcz81NDBmIl0sIm5hbWVzIjpbInRvZ2dsZUNsYXNzIiwibm9kZSIsImNsYXNzTmFtZSIsImNsYXNzTmFtZXMiLCJ0cmltIiwic3BsaXQiLCJub2RlQ2xhc3MiLCJnZXRBdHRyaWJ1dGUiLCJub2RlQ2xhc3NOYW1lcyIsImkiLCJsZW5ndGgiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJjb25jYXQiLCJzZXRBdHRyaWJ1dGUiLCJqb2luIiwiaGFzQ2xhc3MiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIlJlZ0V4cCIsInRlc3QiLCJzdGlja3lIZWlnaHQiLCJoZWFkZXJIZWlnaHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJoZWlnaHQiLCJ0b3AiLCJzcE1lbnUiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUlzQWN0aXZlIiwicmVtb3ZlIiwiX3Jlc2l6ZUV2ZW50Iiwid2luZG93Iiwib25yZXNpemUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2hhcnRGdW5jIiwiaWQiLCJibHVlIiwiZ3JheSIsImNoYXJ0anMiLCJDaGFydCIsInR5cGUiLCJkYXRhIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJXaWR0aCIsIm9wdGlvbnMiLCJ0b29sdGlwcyIsImVuYWJsZWQiLCJob3ZlciIsIm1vZGUiLCJjdXRvdXRQZXJjZW50YWdlIiwicGx1Z2lucyIsImRlZmVycmVkIiwieU9mZnNldCIsImRlbGF5IiwiY3R4X2h0bWwiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY3R4X2NzcyIsImN0eF9zYXNzIiwiY3R4X3BzIiwiY3R4X2R3IiwiY3R4X2FpIiwiY3R4X3B1ZyIsImN0eF9naXQiLCJjdHhfbG0iLCJjdHhfbnBtIiwiY3R4X2d1bHAiLCJjdHhfanEiLCJjdHhfeGQiLCJjdHhfcHIiLCJjdHhfYWUiLCJjdHhfanMiLCJwYWdlVG9wQnRuIiwiZm9vIiwibm93WSIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGxUb3AiLCJzY3JvbGxpbmdFbGVtZW50IiwiYWRkIiwiZW1lcmdlbmNlIiwiaW5pdCIsIm9mZnNldFRvcCIsIm9mZnNldEJvdHRvbSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0EsSUFBTUEsY0FBYyxTQUFkQSxXQUFjLENBQVVDLElBQVYsRUFBZ0JDLFNBQWhCLEVBQTJCO0FBQzdDLE1BQUlDLGFBQWFELFVBQVVFLElBQVYsR0FBaUJDLEtBQWpCLENBQXVCLEtBQXZCLENBQWpCO0FBQUEsTUFDRUMsWUFBWSxDQUFDTCxLQUFLTSxZQUFMLENBQWtCLE9BQWxCLEtBQThCLEVBQS9CLEVBQW1DSCxJQUFuQyxFQURkO0FBQUEsTUFFRUksaUJBQWlCRixVQUFVRCxLQUFWLENBQWdC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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxtREFBbUQscUJBQXFCO0FBQ3hFLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7QUNyVEQseUMiLCJmaWxlIjoiL3B1YmxpYy9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWE4Mjg3ZDc2YmU4YjRkOTY4MGIiLCJpbXBvcnQgZW1lcmdlbmNlIGZyb20gJ2VtZXJnZW5jZS5qcyc7XG5cbi8vdG9nZ2xlQ2xhc3NcbmNvbnN0IHRvZ2dsZUNsYXNzID0gZnVuY3Rpb24gKG5vZGUsIGNsYXNzTmFtZSkge1xuICBsZXQgY2xhc3NOYW1lcyA9IGNsYXNzTmFtZS50cmltKCkuc3BsaXQoL1xccysvKSxcbiAgICBub2RlQ2xhc3MgPSAobm9kZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpLnRyaW0oKSxcbiAgICBub2RlQ2xhc3NOYW1lcyA9IG5vZGVDbGFzcy5zcGxpdCgvXFxzKy8pLFxuICAgIGkgPSBjbGFzc05hbWVzLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgbGV0IGluZGV4ID0gbm9kZUNsYXNzTmFtZXMuaW5kZXhPZihjbGFzc05hbWVzW2ldKTtcbiAgICBpZiAofmluZGV4KSB7XG4gICAgICBjbGFzc05hbWVzLnNwbGljZShpLCAxKTtcbiAgICAgIG5vZGVDbGFzc05hbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG4gIG5vZGVDbGFzc05hbWVzID0gbm9kZUNsYXNzTmFtZXMuY29uY2F0KGNsYXNzTmFtZXMpO1xuICBub2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBub2RlQ2xhc3NOYW1lcy5qb2luKCcgJykpO1xufTtcblxuLy9oYXNDbGFzc1xuY29uc3QgaGFzQ2xhc3MgPSAobm9kZSwgY2xhc3NOYW1lKSA9PiB7XG4gIGlmIChub2RlLmNsYXNzTGlzdCkge1xuICAgIHJldHVybiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUudHJpbSgpKTtcbiAgfVxuICByZXR1cm4gbmV3IFJlZ0V4cCgnKF58ICknICsgY2xhc3NOYW1lICsgJyggfCQpJywgJ2cnKS50ZXN0KG5vZGUuY2xhc3NOYW1lLnRyaW0oKSk7XG59O1xuXG4vL3N0aWNreVxuY29uc3Qgc3RpY2t5SGVpZ2h0ID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJykub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0aWNreScpLnN0eWxlLmhlaWdodCA9IGhlYWRlckhlaWdodDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dOYXYnKS5zdHlsZS50b3AgPSBoZWFkZXJIZWlnaHQ7XG59XG5zdGlja3lIZWlnaHQoKTtcblxuLy9tZW51XG5jb25zdCBzcE1lbnUgPSAoKSA9PiB7XG4gIHRvZ2dsZUNsYXNzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcC1tZW51JykucXVlcnlTZWxlY3RvcignaScpLCAnZmEtdGltZXMnKTtcbiAgdG9nZ2xlQ2xhc3MoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dOYXYnKSwgJ2lzQWN0aXZlJyk7XG59XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3AtbWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBzcE1lbnUoKTtcbn0sIGZhbHNlKTtcblxuY29uc3QgcmVtb3ZlSXNBY3RpdmUgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnTmF2JykuY2xhc3NMaXN0LnJlbW92ZSgnaXNBY3RpdmUnKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwLW1lbnUnKS5xdWVyeVNlbGVjdG9yKCdpJykuY2xhc3NMaXN0LnJlbW92ZSgnZmEtdGltZXMnKTtcbn1cblxuLy9yZXNpemVcbmxldCBfcmVzaXplRXZlbnQ7XG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIGNsZWFyVGltZW91dChfcmVzaXplRXZlbnQpO1xuICBfcmVzaXplRXZlbnQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBzdGlja3lIZWlnaHQoKTtcbiAgICByZW1vdmVJc0FjdGl2ZSgpO1xuICB9LCA1MCk7XG59XG5cbi8vY2hhcnRcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKSkge1xuICBjb25zdCBjaGFydEZ1bmMgPSAoaWQsIGJsdWUsIGdyYXkpID0+IHtcbiAgICBjb25zdCBjaGFydGpzID0gbmV3IENoYXJ0KGlkLCB7XG4gICAgICB0eXBlOiAnZG91Z2hudXQnLFxuICAgICAgZGF0YToge1xuICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICBkYXRhOiBbYmx1ZSwgZ3JheV0sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgICAncmdiYSg4MiwgMjAyLCAyNTUsIDEpJyxcbiAgICAgICAgICAgICdyZ2JhKDIwNiwgMjA2LCAyMDYsIDEpJ1xuICAgICAgICAgIF0sXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDBcbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBtb2RlOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDc1LFxuICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgZGVmZXJyZWQ6IHtcbiAgICAgICAgICAgIHlPZmZzZXQ6ICc4MCUnLFxuICAgICAgICAgICAgZGVsYXk6IDIwMFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IGN0eF9odG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBlci1odG1sXCIpO1xuICBjaGFydEZ1bmMoY3R4X2h0bWwsIDExLCAxKTtcbiAgY29uc3QgY3R4X2NzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwZXItY3NzXCIpO1xuICBjaGFydEZ1bmMoY3R4X2NzcywgMTEsIDEpO1xuICBjb25zdCBjdHhfc2FzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwZXItc2Fzc1wiKTtcbiAgY2hhcnRGdW5jKGN0eF9zYXNzLCAxMCwgMik7XG4gIGNvbnN0IGN0eF9wcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwZXItcHNcIik7XG4gIGNoYXJ0RnVuYyhjdHhfcHMsIDEwLCAyKTtcbiAgY29uc3QgY3R4X2R3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBlci1kd1wiKTtcbiAgY2hhcnRGdW5jKGN0eF9kdywgMTAsIDIpO1xuICBjb25zdCBjdHhfYWkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGVyLWFpXCIpO1xuICBjaGFydEZ1bmMoY3R4X2FpLCA5LCAzKTtcbiAgY29uc3QgY3R4X3B1ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwZXItcHVnXCIpO1xuICBjaGFydEZ1bmMoY3R4X3B1ZywgOSwgMyk7XG4gIGNvbnN0IGN0eF9naXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGVyLWdpdFwiKTtcbiAgY2hhcnRGdW5jKGN0eF9naXQsIDgsIDQpO1xuICBjb25zdCBjdHhfbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGVyLWxtXCIpO1xuICBjaGFydEZ1bmMoY3R4X2xtLCA3LCA1KTtcbiAgY29uc3QgY3R4X25wbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwZXItbnBtXCIpO1xuICBjaGFydEZ1bmMoY3R4X25wbSwgNywgNSk7XG4gIGNvbnN0IGN0eF9ndWxwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBlci1ndWxwXCIpO1xuICBjaGFydEZ1bmMoY3R4X2d1bHAsIDcsIDUpO1xuICBjb25zdCBjdHhfanEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGVyLWpxXCIpO1xuICBjaGFydEZ1bmMoY3R4X2pxLCA2LCA2KTtcbiAgY29uc3QgY3R4X3hkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBlci14ZFwiKTtcbiAgY2hhcnRGdW5jKGN0eF94ZCwgNiwgNik7XG4gIGNvbnN0IGN0eF9wciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwZXItcHJcIik7XG4gIGNoYXJ0RnVuYyhjdHhfcHIsIDYsIDYpO1xuICBjb25zdCBjdHhfYWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGVyLWFlXCIpO1xuICBjaGFydEZ1bmMoY3R4X2FlLCAzLCA5KTtcbiAgY29uc3QgY3R4X2pzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBlci1qc1wiKTtcbiAgY2hhcnRGdW5jKGN0eF9qcywgMywgOSk7XG5cbn1cblxuLy8gcGFnZXRvcFxuY29uc3QgcGFnZVRvcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdldG9wJyk7XG5wYWdlVG9wQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBmb28oKSB7XG4gIGNvbnN0IG5vd1kgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIHdpbmRvdy5zY3JvbGxUbygwLCBNYXRoLmZsb29yKG5vd1kgKiAwLjgpKTtcbiAgaWYgKG5vd1kgPiAwKSB7XG4gICAgd2luZG93LnNldFRpbWVvdXQoZm9vLCAxMCk7XG4gIH1cbn0pO1xuXG4vLyBwYWdldG9wIOOCkuOCueOCr+ODreODvOODq+OBl+OBpuOBi+OCieihqOekulxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgLy/pq5jjgZXjgpLlj5blvpfjgZfjgabooajnpLpcbiAgbGV0IHNjcm9sbFRvcCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wO1xuICBpZiAoc2Nyb2xsVG9wID4gMTAwKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2V0b3AnKS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIH0gZWxzZSBpZiAoc2Nyb2xsVG9wIDwgMTAwKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2V0b3AnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIH1cbn0sIGZhbHNlKTtcblxuLy9lbWVyZ2VuY2VcbmVtZXJnZW5jZS5pbml0KHtcbiAgb2Zmc2V0VG9wOiAxMDAsXG4gIG9mZnNldEJvdHRvbTogMTAwXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYXBwLmpzIiwiKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgLy8gQU1EXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeShyb290KTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBOb2RlLmpzIG9yIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5O1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIHJvb3QuZW1lcmdlbmNlID0gZmFjdG9yeShyb290KTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24ocm9vdCkge1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgZW1lcmdlbmNlID0ge307XG4gIHZhciBwb2xsLCBjb250YWluZXIsIHRocm90dGxlLCByZXNldCwgaGFuZGhlbGQsIGVsZW1DdXNoaW9uLCBvZmZzZXRUb3AsIG9mZnNldFJpZ2h0LCBvZmZzZXRCb3R0b20sIG9mZnNldExlZnQ7XG4gIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uKCkge307XG5cbiAgLy8gQnJvd3NlciBmZWF0dXJlIHRlc3QgdG8gaW5jbHVkZSBhbnkgYnJvd3NlciBBUElzIHJlcXVpcmVkIGZvciA+PSBJRThcbiAgLy8gQHJldHVybiB7Ym9vbH0gdHJ1ZSBpZiBzdXBwb3J0ZWQsIG90aGVyd2lzZSBmYWxzZVxuICB2YXIgY3V0c1RoZU11c3RhcmQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJ3F1ZXJ5U2VsZWN0b3JBbGwnIGluIGRvY3VtZW50ID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuXG4gIC8vIENoZWNrcyBpZiB1c2VyIGlzIG9uIGEgaGFuZGhlbGRcbiAgLy8gQHJldHVybiB7Ym9vbH0gdHJ1ZSBpZiBpdCdzIGEgaGFuZGhlbGQsIG90aGVyd2lzZSBmYWxzZVxuICB2YXIgaXNIYW5kaGVsZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaXxwbGF5Ym9va3xzaWxrL2kudGVzdChcbiAgICAgIG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICApO1xuICB9O1xuXG4gIC8vIEdldCB0aGUgb2Zmc2V0IG9mIGEgRE9NIEVsZW1lbnRcbiAgLy8gQHBhcmFtIHtET01FbGVtZW50fSBlbGVtIHRoZSBjb250YWluZXIgb3IgZWxlbWVudFxuICAvLyBAcmV0dXJuIHtpbnR9IHRoZSB0b3AsIGxlZnQsIHdpZHRoIGFuZCBoZWlnaHQgdmFsdWVzIGluIHBpeGVsc1xuICB2YXIgZ2V0RWxlbU9mZnNldCA9IGZ1bmN0aW9uKGVsZW0pIHtcblxuICAgIC8vIFdpZHRoIGFuZCBoZWlnaHQgb2YgY29udGFpbmVyIG9yIGVsZW1lbnRcbiAgICB2YXIgdyA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgdmFyIGggPSBlbGVtLm9mZnNldEhlaWdodDtcblxuICAgIC8vIERlZmF1bHQgdG9wIGFuZCBsZWZ0IHBvc2l0aW9uIG9mIGNvbnRhaW5lciBvciBlbGVtZW50XG4gICAgdmFyIHRvcFBvcyA9IDA7XG4gICAgdmFyIGxlZnRQb3MgPSAwO1xuXG4gICAgLy8gR2V0IHRvdGFsIGRpc3RhbmNlIG9mIGNvbnRhaW5lciBvciBlbGVtZW50IHRvIGRvY3VtZW50J3MgdG9wIGFuZCBsZWZ0IG9yaWdpblxuICAgIGRvIHtcbiAgICAgIGlmICghaXNOYU4oZWxlbS5vZmZzZXRUb3ApKSB7XG4gICAgICAgIHRvcFBvcyArPSBlbGVtLm9mZnNldFRvcDtcbiAgICAgIH1cbiAgICAgIGlmICghaXNOYU4oZWxlbS5vZmZzZXRMZWZ0KSkge1xuICAgICAgICBsZWZ0UG9zICs9IGVsZW0ub2Zmc2V0TGVmdDtcbiAgICAgIH1cbiAgICB9IHdoaWxlICgoZWxlbSA9IGVsZW0ub2Zmc2V0UGFyZW50KSAhPT0gbnVsbCk7XG5cbiAgICAvLyBSZXR1cm4gZGltZW5zaW9ucyBhbmQgcG9zaXRpb25cbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHcsXG4gICAgICBoZWlnaHQ6IGgsXG4gICAgICB0b3A6IHRvcFBvcyxcbiAgICAgIGxlZnQ6IGxlZnRQb3NcbiAgICB9O1xuICB9O1xuXG4gIC8vIEdldCB0aGUgY3VzdG9tIGNvbnRhaW5lciBzaXplIGlmIHByb3ZpZGVkLCBvdGhlcndpc2UgdGhlIGRvY3VtZW50c1xuICAvLyBAcmV0dXJuIHtpbnR9IHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGluIHBpeGVsc1xuICB2YXIgZ2V0Q29udGFpbmVyU2l6ZSA9IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuICAgIHZhciB3LCBoO1xuXG4gICAgLy8gSWYgY3VzdG9tIGNvbnRhaW5lciBpcyBwcm92aWRlZCBpbiBvcHRpb25zXG4gICAgLy8gRWxzZSB1c2Ugd2luZG93IG9yIGRvY3VtZW50XG4gICAgaWYgKGNvbnRhaW5lciAhPT0gd2luZG93KSB7XG4gICAgICB3ID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgaCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHcgPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICBoID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB3LFxuICAgICAgaGVpZ2h0OiBoXG4gICAgfTtcbiAgfTtcblxuICAvLyBHZXQgdGhlIFggYW5kIFkgc2Nyb2xsIHBvc2l0aW9uc1xuICAvLyBAcmV0dXJuIHtpbnR9IHRoZSBYIGFuZCBZIHZhbHVlcyBpbiBwaXhlbHNcbiAgdmFyIGdldENvbnRhaW5lclNjcm9sbCA9IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuXG4gICAgLy8gSWYgY3VzdG9tIGNvbnRhaW5lciBpcyBwcm92aWRlZCBpbiBvcHRpb25zXG4gICAgLy8gRWxzZSB1c2Ugd2luZG93IG9yIGRvY3VtZW50XG4gICAgaWYgKGNvbnRhaW5lciAhPT0gd2luZG93KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiBjb250YWluZXIuc2Nyb2xsTGVmdCArIGdldEVsZW1PZmZzZXQoY29udGFpbmVyKS5sZWZ0LFxuICAgICAgICB5OiBjb250YWluZXIuc2Nyb2xsVG9wICsgZ2V0RWxlbU9mZnNldChjb250YWluZXIpLnRvcFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgICB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQ2hlY2sgaWYgZWxlbWVudCdzIGNsb3Nlc3QgcGFyZW50IGlzIGhpZGRlbiAoZGlzcGxheTogbm9uZSlcbiAgLy8gQHBhcmFtIHtET01FbGVtZW50fSBlbGVtIHRoZSBlbGVtZW50XG4gIC8vIEByZXR1cm4ge2Jvb2x9IHRydWUgaWYgaGlkZGVuLCBmYWxzZSBvdGhlcndpc2VcbiAgdmFyIGlzSGlkZGVuID0gZnVuY3Rpb24oZWxlbSkge1xuICAgIHJldHVybiBlbGVtLm9mZnNldFBhcmVudCA9PT0gbnVsbDtcbiAgfTtcblxuICAvLyBDaGVjayBpZiBlbGVtZW50IGlzIHZpc2libGVcbiAgLy8gQHBhcmFtIHtET01FbGVtZW50fSBlbGVtIHRoZSBlbGVtZW50XG4gIHZhciBpc1Zpc2libGUgPSBmdW5jdGlvbihlbGVtKSB7XG5cbiAgICAvLyBEaXNjb250aW51ZSBpZiBlbGVtZW50J3MgY2xvc2VzdCBwYXJlbnQgaXMgaGlkZGVuXG4gICAgaWYgKGlzSGlkZGVuKGVsZW0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gR2V0IGluZm9ybWF0aW9uIGZyb20gZWxlbWVudCBhbmQgY29udGFpbmVyXG4gICAgdmFyIGVsZW1PZmZzZXQgPSBnZXRFbGVtT2Zmc2V0KGVsZW0pO1xuICAgIHZhciBjb250YWluZXJTaXplID0gZ2V0Q29udGFpbmVyU2l6ZShjb250YWluZXIpO1xuICAgIHZhciBjb250YWluZXJTY3JvbGwgPSBnZXRDb250YWluZXJTY3JvbGwoY29udGFpbmVyKTtcblxuICAgIC8vIERldGVybWluZSBlbGVtZW50IHNpemVcbiAgICB2YXIgZWxlbVdpZHRoID0gZWxlbU9mZnNldC53aWR0aDtcbiAgICB2YXIgZWxlbUhlaWdodCA9IGVsZW1PZmZzZXQuaGVpZ2h0O1xuXG4gICAgLy8gRGV0ZXJtaW5lIGVsZW1lbnQgcG9zaXRpb24gZnJvbSByZWN0IHBvaW50c1xuICAgIHZhciBlbGVtVG9wID0gZWxlbU9mZnNldC50b3A7XG4gICAgdmFyIGVsZW1MZWZ0ID0gZWxlbU9mZnNldC5sZWZ0O1xuICAgIHZhciBlbGVtQm90dG9tID0gZWxlbVRvcCArIGVsZW1IZWlnaHQ7XG4gICAgdmFyIGVsZW1SaWdodCA9IGVsZW1MZWZ0ICsgZWxlbVdpZHRoO1xuXG4gICAgLy8gRGV0ZXJtaW5lIGJvdW5kYXJpZXMgb2YgY29udGFpbmVyIGFuZCBlbGVtZW50XG4gICAgLy8gQHJldHVybiB7Ym9vbH0gdHJ1ZSBpZiBlbGVtZW50IGlzIGZvdW5kIHdpdGhpbiBib3VuZGFyaWVzLCBvdGhlcndpc2UgZmFsc2VcbiAgICB2YXIgY2hlY2tCb3VuZGFyaWVzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIC8vIERldGVybWluZSBlbGVtZW50IGJvdW5kYXJpZXMgaW5jbHVkaW5nIGN1c3RvbSBjdXNoaW9uXG4gICAgICB2YXIgZVRvcCA9IGVsZW1Ub3AgKyBlbGVtSGVpZ2h0ICogZWxlbUN1c2hpb247XG4gICAgICB2YXIgZVJpZ2h0ID0gZWxlbVJpZ2h0IC0gZWxlbVdpZHRoICogZWxlbUN1c2hpb247XG4gICAgICB2YXIgZUJvdHRvbSA9IGVsZW1Cb3R0b20gLSBlbGVtSGVpZ2h0ICogZWxlbUN1c2hpb247XG4gICAgICB2YXIgZUxlZnQgPSBlbGVtTGVmdCArIGVsZW1XaWR0aCAqIGVsZW1DdXNoaW9uO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgY29udGFpbmVyIGJvdW5kYXJpZXMgaW5jbHVkaW5nIGN1c3RvbSBvZmZzZXRcbiAgICAgIHZhciBjVG9wID0gY29udGFpbmVyU2Nyb2xsLnkgKyBvZmZzZXRUb3A7XG4gICAgICB2YXIgY1JpZ2h0ID0gY29udGFpbmVyU2Nyb2xsLnggLSBvZmZzZXRSaWdodCArIGNvbnRhaW5lclNpemUud2lkdGg7XG4gICAgICB2YXIgY0JvdHRvbSA9IGNvbnRhaW5lclNjcm9sbC55IC0gb2Zmc2V0Qm90dG9tICsgY29udGFpbmVyU2l6ZS5oZWlnaHQ7XG4gICAgICB2YXIgY0xlZnQgPSBjb250YWluZXJTY3JvbGwueCArIG9mZnNldExlZnQ7XG5cbiAgICAgIHJldHVybiAoZVRvcCA8IGNCb3R0b20gJiYgZUJvdHRvbSA+IGNUb3AgJiYgZUxlZnQgPCBjUmlnaHQgJiYgZVJpZ2h0ID4gY0xlZnQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gY2hlY2tCb3VuZGFyaWVzKCk7XG4gIH07XG5cbiAgLy8gRW5nYWdlIGVtZXJnZW5jZSB0aHJvdWdoIGEgdGhyb3R0bGluZyBtZXRob2QgZm9yIHBlcmZvcm1hbmNlXG4gIHZhciBlbWVyZ2VuY2VUaHJvdHRsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghIXBvbGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KHBvbGwpO1xuICAgIHBvbGwgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgZW1lcmdlbmNlLmVuZ2FnZSgpO1xuICAgICAgcG9sbCA9IG51bGw7XG4gICAgfSwgdGhyb3R0bGUpO1xuICB9O1xuXG4gIC8vIEluaXRpYWxpemUgZW1lcmdlbmNlIHdpdGggb3B0aW9ucywgZG8gZmVhdHVyZSB0ZXN0IGFuZCBjcmVhdGUgZXZlbnQgbGlzdGVuZXJzXG4gIC8vIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEN1c3RvbSBzZXR0aW5nc1xuICBlbWVyZ2VuY2UuaW5pdCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIHJldHVybiBhbiBpbnRlZ2VyXG4gICAgdmFyIG9wdGlvbkludCA9IGZ1bmN0aW9uKG9wdGlvbiwgZmFsbGJhY2spIHtcbiAgICAgIHJldHVybiBwYXJzZUludChvcHRpb24gfHwgZmFsbGJhY2ssIDEwKTtcbiAgICB9O1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gcmV0dXJuIGEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyXG4gICAgdmFyIG9wdGlvbkZsb2F0ID0gZnVuY3Rpb24ob3B0aW9uLCBmYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQob3B0aW9uIHx8IGZhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgLy8gRGVmYXVsdCBvcHRpb25zXG4gICAgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIgfHwgd2luZG93OyAvLyB3aW5kb3cgb3IgZG9jdW1lbnQgYnkgZGVmYXVsdFxuICAgIHJlc2V0ID0gdHlwZW9mIG9wdGlvbnMucmVzZXQgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5yZXNldCA6IHRydWU7IC8vIHRydWUgYnkgZGVmYXVsdFxuICAgIGhhbmRoZWxkID0gdHlwZW9mIG9wdGlvbnMuaGFuZGhlbGQgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5oYW5kaGVsZCA6IHRydWU7IC8vIHRydWUgYnkgZGVmYXVsdFxuICAgIHRocm90dGxlID0gb3B0aW9uSW50KG9wdGlvbnMudGhyb3R0bGUsIDI1MCk7IC8vIDI1MCBieSBkZWZhdWx0XG4gICAgZWxlbUN1c2hpb24gPSBvcHRpb25GbG9hdChvcHRpb25zLmVsZW1DdXNoaW9uLCAwLjE1KTsgLy8gMC4xNSBieSBkZWZhdWx0XG4gICAgb2Zmc2V0VG9wID0gb3B0aW9uSW50KG9wdGlvbnMub2Zmc2V0VG9wLCAwKTsgLy8gMCBieSBkZWZhdWx0XG4gICAgb2Zmc2V0UmlnaHQgPSBvcHRpb25JbnQob3B0aW9ucy5vZmZzZXRSaWdodCwgMCk7IC8vIDAgYnkgZGVmYXVsdFxuICAgIG9mZnNldEJvdHRvbSA9IG9wdGlvbkludChvcHRpb25zLm9mZnNldEJvdHRvbSwgMCk7IC8vIDAgYnkgZGVmYXVsdFxuICAgIG9mZnNldExlZnQgPSBvcHRpb25JbnQob3B0aW9ucy5vZmZzZXRMZWZ0LCAwKTsgLy8gMCBieSBkZWZhdWx0XG4gICAgY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrIHx8IGNhbGxiYWNrO1xuXG4gICAgLy8gSWYgYnJvd3NlciBkb2Vzbid0IHBhc3MgZmVhdHVyZSB0ZXN0XG4gICAgaWYgKCFjdXRzVGhlTXVzdGFyZCgpKSB7XG5cbiAgICAgIC8vIFByb3ZpZGUgbWVzc2FnZSBpbiBjb25zb2xlLmxvZ1xuICAgICAgY29uc29sZS5sb2coJ0VtZXJnZW5jZS5qcyBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3Nlci4nKTtcblxuICAgIH1cbiAgICAvLyBJZiB0aGlzIGlzIGhhbmRoZWxkIGRldmljZSBBTkQgaGFuZGhlbGQgb3B0aW9uIGlzIHRydWVcbiAgICAvLyBPUiBub3QgYSBoYW5kaGVsZCBkZXZpY2VcbiAgICBlbHNlIGlmICgoaXNIYW5kaGVsZCgpICYmIGhhbmRoZWxkKSB8fCAhaXNIYW5kaGVsZCgpKSB7XG5cbiAgICAgIC8vIEFkZCAnLmVtZXJnZW5jZScgY2xhc3MgdG8gZG9jdW1lbnQgZm9yIGNvbmRpdGlvbmFsIENTU1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSArPSAnIGVtZXJnZW5jZSc7XG5cbiAgICAgIC8vIElmIGJyb3dzZXIgc3VwcG9ydHMgYWRkRXZlbnRMaXN0ZW5lclxuICAgICAgLy8gRWxzZSB1c2UgYXR0YWNoRXZlbnRcbiAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuXG4gICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIGxvYWQsIHNjcm9sbCBhbmQgcmVzaXplIGV2ZW50c1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGVtZXJnZW5jZVRocm90dGxlLCBmYWxzZSk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBlbWVyZ2VuY2VUaHJvdHRsZSwgZmFsc2UpO1xuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZW1lcmdlbmNlVGhyb3R0bGUsIGZhbHNlKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICAvLyBBdHRhY2ggZXZlbnRzIGZvciBsZWdhY3kgbG9hZCBtZXRob2QsIHNjcm9sbCBhbmQgcmVzaXplIGV2ZW50c1xuICAgICAgICBkb2N1bWVudC5hdHRhY2hFdmVudCgnb25yZWFkeXN0YXRlY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHsgZW1lcmdlbmNlVGhyb3R0bGUoKTsgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29udGFpbmVyLmF0dGFjaEV2ZW50KCdvbnNjcm9sbCcsIGVtZXJnZW5jZVRocm90dGxlKTtcbiAgICAgICAgY29udGFpbmVyLmF0dGFjaEV2ZW50KCdvbnJlc2l6ZScsIGVtZXJnZW5jZVRocm90dGxlKTtcblxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBFbmdhZ2UgZW1lcmdlbmNlXG4gIGVtZXJnZW5jZS5lbmdhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lbWVyZ2VuY2VdJyk7XG4gICAgdmFyIGxlbmd0aCA9IG5vZGVzLmxlbmd0aDtcbiAgICB2YXIgZWxlbTtcblxuICAgIC8vIExvb3AgdGhyb3VnaCBvYmplY3RzIHdpdGggZGF0YS1lbWVyZ2VuY2UgYXR0cmlidXRlXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgZWxlbSA9IG5vZGVzW2ldO1xuXG4gICAgICAvLyBJZiBlbGVtZW50IGlzIHZpc2libGVcbiAgICAgIGlmIChpc1Zpc2libGUoZWxlbSkpIHtcblxuICAgICAgICAvLyBDaGFuZ2UgdGhlIHN0YXRlIG9mIHRoZSBhdHRyaWJ1dGUgdG8gJ3Zpc2libGUnXG4gICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdkYXRhLWVtZXJnZW5jZScsICd2aXNpYmxlJyk7XG5cbiAgICAgICAgLy8gSGFjayB0byByZXBhaW50IGF0dHJpYnV0ZSBpbiBJRThcbiAgICAgICAgZWxlbS5jbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZTtcblxuICAgICAgICAvLyBDYWxsYmFjayBmb3Igd2hlbiBlbGVtZW50IGlzIHZpc2libGVcbiAgICAgICAgY2FsbGJhY2soZWxlbSwgJ3Zpc2libGUnKTtcblxuICAgICAgfSBlbHNlIGlmIChyZXNldCA9PT0gdHJ1ZSkge1xuXG4gICAgICAgIC8vIEVsc2UgaWYgZWxlbWVudCBpcyBoaWRkZW4gYW5kIHJlc2V0XG4gICAgICAgIC8vIENoYW5nZSB0aGUgc3RhdGUgb2YgdGhlIGF0dHJpYnV0ZSB0byAnaGlkZGVuJ1xuICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1lbWVyZ2VuY2UnLCAnaGlkZGVuJyk7XG5cbiAgICAgICAgLy8gSGFjayB0byByZXBhaW50IGF0dHJpYnV0ZSBpbiBJRThcbiAgICAgICAgZWxlbS5jbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZTtcblxuICAgICAgICAvLyBDcmVhdGUgY2FsbGJhY2tcbiAgICAgICAgY2FsbGJhY2soZWxlbSwgJ3Jlc2V0Jyk7XG5cbiAgICAgIH0gZWxzZSBpZiAocmVzZXQgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgLy8gRWxzZSBpZiBlbGVtZW50IGlzIGhpZGRlbiBhbmQgTk9UIHJlc2V0XG4gICAgICAgIC8vIENyZWF0ZSBjYWxsYmFja1xuICAgICAgICBjYWxsYmFjayhlbGVtLCAnbm9yZXNldCcpO1xuXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIElmIG5vIGRhdGEtZW1lcmdlbmNlIGF0dHJpYnV0ZXMgYXJlIGZvdW5kXG4gICAgLy8gRGlzZW5nYWdlIGVtZXJnZW5jZVxuICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICBlbWVyZ2VuY2UuZGlzZW5nYWdlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIERpc2VuZ2FnZSBlbWVyZ2VuY2VcbiAgZW1lcmdlbmNlLmRpc2VuZ2FnZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gSWYgYnJvd3NlciBzdXBwb3J0cyByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgLy8gRWxzZSB1c2UgZGV0YWNoRXZlbnRcbiAgICBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcblxuICAgICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBzY3JvbGwgYW5kIHJlc2l6ZSBldmVudHNcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBlbWVyZ2VuY2VUaHJvdHRsZSwgZmFsc2UpO1xuICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGVtZXJnZW5jZVRocm90dGxlLCBmYWxzZSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyBEZXRhY2ggc2Nyb2xsIGFuZCByZXNpemUgZXZlbnRzXG4gICAgICBjb250YWluZXIuZGV0YWNoRXZlbnQoJ29uc2Nyb2xsJywgZW1lcmdlbmNlVGhyb3R0bGUpO1xuICAgICAgY29udGFpbmVyLmRldGFjaEV2ZW50KCdvbnJlc2l6ZScsIGVtZXJnZW5jZVRocm90dGxlKTtcblxuICAgIH1cblxuICAgIC8vIENsZWFyIHRpbWVvdXQgZnJvbSB0aHJvdHRsZVxuICAgIGNsZWFyVGltZW91dChwb2xsKTtcbiAgfTtcblxuICByZXR1cm4gZW1lcmdlbmNlO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbWVyZ2VuY2UuanMvc3JjL2VtZXJnZW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3Mvc3R5bGUuc2Fzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9