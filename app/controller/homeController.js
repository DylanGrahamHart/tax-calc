module.exports = homeController;

////

function homeController(chartService) {
  var home = this;

  // Methods
  home.addTaxBracket = addTaxBracket;
  home.drawChart = drawChart;

  init();

  ////////

  function init() {

  }

  function drawChart() {
    var params = gatherChartParams();
    chartService.drawChart(params);
  }

  function gatherChartParams() {

  }

  function addTaxBracket() {

  }

};
