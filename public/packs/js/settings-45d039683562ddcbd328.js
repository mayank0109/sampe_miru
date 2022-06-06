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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/settings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/settings.js":
/*!******************************************!*\
  !*** ./app/javascript/packs/settings.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var logger = __webpack_require__(/*! js-logger */ "./node_modules/js-logger/src/logger.js").get("@saeloun/miru-web:javascript:packs:settings");

/* eslint-disable */
window.showImage = function () {
  return {
    showPreview: function showPreview(event) {
      if (event.target.files.length > 0) {
        var preview = document.getElementById("preview");
        preview.src = URL.createObjectURL(event.target.files[0]);
        preview.style.display = "block";
        document.getElementById("clear-preview").classList.remove("hidden");
        document.getElementById("add-logo").classList.add("hidden");
      }
    },
    clearPreview: function clearPreview() {
      var preview = document.getElementById("preview");
      preview.removeAttribute("src");
      preview.style.display = "none";
      document.getElementById("clear-preview").classList.toggle("hidden");
      document.getElementById("company_logo").value = "";
      document.getElementById("add-logo").classList.remove("hidden");
    }
  };
};

function showImage() {
  return {
    showPreview: function showPreview(event) {
      if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("preview");
        preview.src = src;
        preview.style.display = "block";
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/js-logger/src/logger.js":
/*!**********************************************!*\
  !*** ./node_modules/js-logger/src/logger.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * js-logger - http://github.com/jonnyreeves/js-logger
 * Jonny Reeves, http://jonnyreeves.co.uk/
 * js-logger may be freely distributed under the MIT license.
 */
(function (global) {
  "use strict"; // Top level module for the global, static logger instance.

  var Logger = {}; // For those that are at home that are keeping score.

  Logger.VERSION = "1.6.1"; // Function which handles all incoming log messages.

  var logHandler; // Map of ContextualLogger instances by name; used by Logger.get() to return the same named instance.

  var contextualLoggersByNameMap = {}; // Polyfill for ES5's Function.bind.

  var bind = function bind(scope, func) {
    return function () {
      return func.apply(scope, arguments);
    };
  }; // Super exciting object merger-matron 9000 adding another 100 bytes to your download.


  var merge = function merge() {
    var args = arguments,
        target = args[0],
        key,
        i;

    for (i = 1; i < args.length; i++) {
      for (key in args[i]) {
        if (!(key in target) && args[i].hasOwnProperty(key)) {
          target[key] = args[i][key];
        }
      }
    }

    return target;
  }; // Helper to define a logging level object; helps with optimisation.


  var defineLogLevel = function defineLogLevel(value, name) {
    return {
      value: value,
      name: name
    };
  }; // Predefined logging levels.


  Logger.TRACE = defineLogLevel(1, 'TRACE');
  Logger.DEBUG = defineLogLevel(2, 'DEBUG');
  Logger.INFO = defineLogLevel(3, 'INFO');
  Logger.TIME = defineLogLevel(4, 'TIME');
  Logger.WARN = defineLogLevel(5, 'WARN');
  Logger.ERROR = defineLogLevel(8, 'ERROR');
  Logger.OFF = defineLogLevel(99, 'OFF'); // Inner class which performs the bulk of the work; ContextualLogger instances can be configured independently
  // of each other.

  var ContextualLogger = function ContextualLogger(defaultContext) {
    this.context = defaultContext;
    this.setLevel(defaultContext.filterLevel);
    this.log = this.info; // Convenience alias.
  };

  ContextualLogger.prototype = {
    // Changes the current logging level for the logging instance.
    setLevel: function setLevel(newLevel) {
      // Ensure the supplied Level object looks valid.
      if (newLevel && "value" in newLevel) {
        this.context.filterLevel = newLevel;
      }
    },
    // Gets the current logging level for the logging instance
    getLevel: function getLevel() {
      return this.context.filterLevel;
    },
    // Is the logger configured to output messages at the supplied level?
    enabledFor: function enabledFor(lvl) {
      var filterLevel = this.context.filterLevel;
      return lvl.value >= filterLevel.value;
    },
    trace: function trace() {
      this.invoke(Logger.TRACE, arguments);
    },
    debug: function debug() {
      this.invoke(Logger.DEBUG, arguments);
    },
    info: function info() {
      this.invoke(Logger.INFO, arguments);
    },
    warn: function warn() {
      this.invoke(Logger.WARN, arguments);
    },
    error: function error() {
      this.invoke(Logger.ERROR, arguments);
    },
    time: function time(label) {
      if (typeof label === 'string' && label.length > 0) {
        this.invoke(Logger.TIME, [label, 'start']);
      }
    },
    timeEnd: function timeEnd(label) {
      if (typeof label === 'string' && label.length > 0) {
        this.invoke(Logger.TIME, [label, 'end']);
      }
    },
    // Invokes the logger callback if it's not being filtered.
    invoke: function invoke(level, msgArgs) {
      if (logHandler && this.enabledFor(level)) {
        logHandler(msgArgs, merge({
          level: level
        }, this.context));
      }
    }
  }; // Protected instance which all calls to the to level `Logger` module will be routed through.

  var globalLogger = new ContextualLogger({
    filterLevel: Logger.OFF
  }); // Configure the global Logger instance.

  (function () {
    // Shortcut for optimisers.
    var L = Logger;
    L.enabledFor = bind(globalLogger, globalLogger.enabledFor);
    L.trace = bind(globalLogger, globalLogger.trace);
    L.debug = bind(globalLogger, globalLogger.debug);
    L.time = bind(globalLogger, globalLogger.time);
    L.timeEnd = bind(globalLogger, globalLogger.timeEnd);
    L.info = bind(globalLogger, globalLogger.info);
    L.warn = bind(globalLogger, globalLogger.warn);
    L.error = bind(globalLogger, globalLogger.error); // Don't forget the convenience alias!

    L.log = L.info;
  })(); // Set the global logging handler.  The supplied function should expect two arguments, the first being an arguments
  // object with the supplied log messages and the second being a context object which contains a hash of stateful
  // parameters which the logging function can consume.


  Logger.setHandler = function (func) {
    logHandler = func;
  }; // Sets the global logging filter level which applies to *all* previously registered, and future Logger instances.
  // (note that named loggers (retrieved via `Logger.get`) can be configured independently if required).


  Logger.setLevel = function (level) {
    // Set the globalLogger's level.
    globalLogger.setLevel(level); // Apply this level to all registered contextual loggers.

    for (var key in contextualLoggersByNameMap) {
      if (contextualLoggersByNameMap.hasOwnProperty(key)) {
        contextualLoggersByNameMap[key].setLevel(level);
      }
    }
  }; // Gets the global logging filter level


  Logger.getLevel = function () {
    return globalLogger.getLevel();
  }; // Retrieve a ContextualLogger instance.  Note that named loggers automatically inherit the global logger's level,
  // default context and log handler.


  Logger.get = function (name) {
    // All logger instances are cached so they can be configured ahead of use.
    return contextualLoggersByNameMap[name] || (contextualLoggersByNameMap[name] = new ContextualLogger(merge({
      name: name
    }, globalLogger.context)));
  }; // CreateDefaultHandler returns a handler function which can be passed to `Logger.setHandler()` which will
  // write to the window's console object (if present); the optional options object can be used to customise the
  // formatter used to format each log message.


  Logger.createDefaultHandler = function (options) {
    options = options || {};

    options.formatter = options.formatter || function defaultMessageFormatter(messages, context) {
      // Prepend the logger's name to the log message for easy identification.
      if (context.name) {
        messages.unshift("[" + context.name + "]");
      }
    }; // Map of timestamps by timer labels used to track `#time` and `#timeEnd()` invocations in environments
    // that don't offer a native console method.


    var timerStartTimeByLabelMap = {}; // Support for IE8+ (and other, slightly more sane environments)

    var invokeConsoleMethod = function invokeConsoleMethod(hdlr, messages) {
      Function.prototype.apply.call(hdlr, console, messages);
    }; // Check for the presence of a logger.


    if (typeof console === "undefined") {
      return function () {
        /* no console */
      };
    }

    return function (messages, context) {
      // Convert arguments object to Array.
      messages = Array.prototype.slice.call(messages);
      var hdlr = console.log;
      var timerLabel;

      if (context.level === Logger.TIME) {
        timerLabel = (context.name ? '[' + context.name + '] ' : '') + messages[0];

        if (messages[1] === 'start') {
          if (console.time) {
            console.time(timerLabel);
          } else {
            timerStartTimeByLabelMap[timerLabel] = new Date().getTime();
          }
        } else {
          if (console.timeEnd) {
            console.timeEnd(timerLabel);
          } else {
            invokeConsoleMethod(hdlr, [timerLabel + ': ' + (new Date().getTime() - timerStartTimeByLabelMap[timerLabel]) + 'ms']);
          }
        }
      } else {
        // Delegate through to custom warn/error loggers if present on the console.
        if (context.level === Logger.WARN && console.warn) {
          hdlr = console.warn;
        } else if (context.level === Logger.ERROR && console.error) {
          hdlr = console.error;
        } else if (context.level === Logger.INFO && console.info) {
          hdlr = console.info;
        } else if (context.level === Logger.DEBUG && console.debug) {
          hdlr = console.debug;
        } else if (context.level === Logger.TRACE && console.trace) {
          hdlr = console.trace;
        }

        options.formatter(messages, context);
        invokeConsoleMethod(hdlr, messages);
      }
    };
  }; // Configure and example a Default implementation which writes to the `window.console` (if present).  The
  // `options` hash can be used to configure the default logLevel and provide a custom message formatter.


  Logger.useDefaults = function (options) {
    Logger.setLevel(options && options.defaultLevel || Logger.DEBUG);
    Logger.setHandler(Logger.createDefaultHandler(options));
  }; // Createa an alias to useDefaults to avoid reaking a react-hooks rule.


  Logger.setDefaults = Logger.useDefaults; // Export to popular environments boilerplate.

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Logger),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this);

/***/ })

/******/ });
//# sourceMappingURL=settings-45d039683562ddcbd328.js.map