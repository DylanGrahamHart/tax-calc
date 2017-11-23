module.exports = chartService;

////

function chartService() {
  var home = this;

  // Properties
  var chartsLoaded = false;
  var loadCallbacks = [];

  init();

  return {
    drawChart: drawChart
  }

  ////////

  function init() {
    setChartsLoaded();
  }

  function setChartsLoaded() {
    var i = 0;
    var intervalId = setInterval(function(){
      if (window.TAX_CALC_GLOBALS && TAX_CALC_GLOBALS.hasGoogleChartsLoaded) {
        chartsLoaded = true;
        clearInterval(intervalId);
        execLoadCallbacks();
      }

      if (i++ === 400) {
        clearInterval(intervalId);
      }
    }, 10);
  }

  function execLoadCallbacks() {
    loadCallbacks.forEach(function(callback){
      callback();
    });

    loadCallbacks = [];
  }

  function drawChart(params) {
    if (!chartsLoaded) {
      loadCallbacks.push(function(){
        drawChart(params);
      });
    } else {
      var data = google.visualization.arrayToDataTable(getChartData(params));

      var options = {
        title: 'Effective Tax Rate By Income',
        curveType: 'function',
        legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart'));
      chart.draw(data, options);
    }
  }

  function getChartData(params) {
    var chartData = [];

    var xAxis = 'Income';
    var yAxisOne = 'Effective Rate';
    chartData.push([xAxis, yAxisOne]);

    var taxesPaid = 0;
    var income = 0;

    while (income <= params.income) {
      var effRate = 0;
      var margRate = 0;

      params.taxBrackets.forEach(function(bracket, i){
        if (income > bracket.cutOff) {
          margRate = bracket.rate
        }
      })

      taxesPaid += parseInt(margRate);
      effRate = income === 0 ? 0 : taxesPaid / income * 100;

      chartData.push([income, effRate]);
      income += 100;
    }

    return chartData;
  }

};

