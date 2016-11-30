var $ = require('jquery');
var utilities = require('./helpers/utilities.js');
var onload = require('./events/onload.js');

/*
  Define global scope
*/
var app = window.app || {};

// Define onload() with in the global 'app' scope
app.onload = onload;
app.utilities = utilities;

// Replace/Create the global namespace
window.app = app;

/*
  jQuery document ready
*/
$(function() {
  // Put all onload JS in events/onload.js
  app.onload();
});
