module.exports = function(app){

  require('./home/home.scss')
  app.config(require('./home/home.route.js'));
  app.directive('home', require('./home/home.directive'));
  app.controller('homeController', require('./home/home.controller'));

};