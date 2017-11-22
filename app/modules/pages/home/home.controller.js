module.exports = home;

////

function home(chartService) {
  var home = this;

  // Methods
  home.addTaxBracket = addTaxBracket;

  init();

  ////////

  function init() {
    chartService.drawChart();
  }

  function addTaxBracket() {

  }

};