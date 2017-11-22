module.exports = function(app){

  app.factory('chartService', require('./services/chartService'));

  require('./pages/home/home.scss');
  app.config(require('./pages/home/home.route.js'));
  app.directive('home', require('./pages/home/home.directive'));
  app.controller('homeController', require('./pages/home/home.controller'));

};