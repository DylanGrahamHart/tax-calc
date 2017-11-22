module.exports = function home() {
  return {
    restrict: 'A',
    replace: true,
    template: require('../html/home.html'),

    bindToController: true,
    controller: 'homeController',
    controllerAs: 'home'
  };
};
