module.exports = homeController;

////

function homeController(chartService) {
  var home = this;

  // Properties
  home.income = 1000000;
  home.taxBrackets = [];

  // Methods
  home.addTaxBracket = addTaxBracket;
  home.drawChart = drawChart;

  init();

  ////////

  function init() {
    addTaxBracket();
    addTaxBracket();
    addTaxBracket();
    addTaxBracket();
    addTaxBracket();

    drawChart();
  }

  function addTaxBracket() {
    var l = home.taxBrackets.length;

    if (home.taxBrackets.length) {
      home.taxBrackets.push({
        rate: parseInt(home.taxBrackets[l - 1].rate) + 10,
        cutOff: home.taxBrackets[l - 1].cutOff * 2
      });
    } else {
      home.taxBrackets.push({
        rate: 0,
        cutOff: 10000
      });
    }
  }

  function drawChart() {
    chartService.drawChart({
      income: home.income,
      taxBrackets: home.taxBrackets
    });
  }

};
