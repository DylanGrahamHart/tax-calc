require('./libs');

var ng = require('angular');
var uiRouter = require('angular-ui-router');

////////////

var app = ng.module('starterApp', [uiRouter]);

require('./styles/main.scss');
require('./core')(app);
require('./modules')(app);