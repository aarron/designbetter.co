/**
 * A throttle execution of a function that fires a message
 * every 250ms by default
 *
 * https://remysharp.com/2010/07/21/throttling-function-calls
 *
 * Require:
 * var Throttle = require('./helpers/throttle.js');
 *
 * Usage:
 * var myEfficientFn = Throttle(function() {
 *  // All the taxing stuff you do
 * }, 250);
 *
 * jQuery:
 * $(window).on('resize', myEfficientFn);
 *
 * Vanilla:
 * window.addEventListener('resize', myEfficientFn);
 *
 */

module.exports = function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}
