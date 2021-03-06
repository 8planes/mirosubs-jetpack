<!-- contributed by Drew Willcoxon [adw@mozilla.com]  -->
<!-- contributed by Atul Varma [atul@mozilla.com]  -->
<!-- edited by Noelle Murata [fiveinchpixie@gmail.com]  -->

The `timer` module provides access to web-like timing functionality.

<api name="setTimeout">
@method
  Schedules `callback` to be called in `ms` milliseconds.
@returns {integer}
  An ID that can later be used to undo this scheduling, if `callback` hasn't yet
  been called.
@param callback {function}
  Function to be called.
@param ms {integer}
  Interval in milliseconds after which the function will be called.
</api>

<api name="clearTimeout">
@method
  Given an ID returned from `setTimeout()`, prevents the callback with the ID
  from being called (if it hasn't yet been called).
@param ID {integer}
  An ID returned from `setTimeout()`.
</api>

<api name="setInterval">
@method
  Schedules `callback` to be called repeatedly every `ms` milliseconds.
@returns {integer}
  An ID that can later be used to unschedule the callback.
@param callback {callback}
  Function to be called.
@param ms {integer}
  Interval in milliseconds at which the function will be called.
</api>

<api name="clearInterval">
@method
  Given an ID returned from `setInterval()`, prevents the callback with the ID
  from being called again.
@param ID {integer}
  An ID returned from `setInterval()`.
</api>
