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
    loadCallbacks.forEach(function(callbacks){
      callbacks();
    });

    loadCallbacks = [];
  }

  function drawChart() {
    if (!chartsLoaded) {
      loadCallbacks.push(drawChart);
    } else {
      var data = google.visualization.arrayToDataTable(getChartData());

      var options = {
        title: 'Effective and Marginal Tax Rate',
        curveType: 'function',
        legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart'));
      chart.draw(data, options);
    }
  }

  function getChartData() {
    var chartData = [];
    var xAxis = 'Income';
    var yAxisOne = 'Effective Rate';
    var yAxisTwo = 'Marginal Rate';

    chartData.push([xAxis, yAxisOne, yAxisTwo]);

    var taxesPaid = 0;
    var income = 0;

    for (var income = 1; income <= 100000; income++) {
      income += 100;
      var effRate = 0;
      var margRate = 0;

      if (income > 10000) {
        margRate = 10;
      }

      taxesPaid += margRate;
      effRate = taxesPaid / income * 100;

      console.log('taxesPaid: ' + taxesPaid);
      console.log('effRate: ' + effRate);

      chartData.push([income, effRate, margRate]);
    }

    return chartData;
  }

};

