module.exports = home;

////

function home(chartService) {
  var home = this;

  init();

  ////////

  function init() {
    chartService.drawChart();
  }

};