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
      if (TAX_CALC_GLOBALS.hasGoogleChartsLoaded) {
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
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart'));
        chart.draw(data, options);
    }
  }

  function getChartData() {
    return [
      ['Year', 'Sales', 'Expenses'],
      ['2004', 1000, 400],
      ['2005', 1170, 460],
      ['2006', 660, 1120],
      ['2007', 1030, 540]
    ]
  }

};