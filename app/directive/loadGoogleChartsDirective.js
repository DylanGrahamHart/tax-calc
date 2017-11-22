module.exports = function loadGoogleCharts() {
  return {
    restrict: 'E',
    replace: false,
    template: require('../html/loadGoogleCharts.html')
  };
};
