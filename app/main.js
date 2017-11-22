var ng = require('angular');
var uiRouter = require('angular-ui-router');

////

var app = ng.module('taxCalc', [uiRouter]);

app.config(require('./route/defaultRoute'));
app.config(require('./route/homeRoute'));

app.factory('chartService', require('./service/chartService'));

app.directive('home', require('./directive/homeDirective'));
app.directive('loadGoogleCharts', require('./directive/loadGoogleChartsDirective'));

app.controller('homeController', require('./controller/homeController'));
