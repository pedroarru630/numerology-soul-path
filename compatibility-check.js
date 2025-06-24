
// Compatibility check for older browsers and hosting environments
(function() {
    'use strict';
    
    // Check for essential JavaScript features
    var hasLocalStorage = false;
    try {
        hasLocalStorage = typeof(Storage) !== 'undefined' && localStorage;
    } catch (e) {
        console.log('LocalStorage not available');
    }
    
    // Polyfill for older browsers
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(callback, thisArg) {
            var T, k;
            if (this == null) {
                throw new TypeError('this is null or not defined');
            }
            var O = Object(this);
            var len = parseInt(O.length) || 0;
            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }
            if (arguments.length > 1) {
                T = thisArg;
            }
            k = 0;
            while (k < len) {
                var kValue;
                if (k in O) {
                    kValue = O[k];
                    callback.call(T, kValue, k, O);
                }
                k++;
            }
        };
    }
    
    // Ensure querySelector works
    if (!document.querySelector) {
        console.log('querySelector not supported');
    }
    
    // Check if addEventListener is available
    if (!document.addEventListener) {
        console.log('addEventListener not supported');
    }
    
    console.log('Compatibility check completed');
})();
