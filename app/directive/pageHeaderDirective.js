module.exports = function pageHeader() {
  return {
    restrict: 'A',
    replace: true,
    template: require('../html/pageHeader.html'),
  };
};
