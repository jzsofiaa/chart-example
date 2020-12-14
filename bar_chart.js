let topTenCities = document.getElementById('bar-chart').getContext('2d');

Chart.defaults.global.defaultFontColor = '#fff';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontFamily = 'Archivo';

let barChart = new Chart(topTenCities, {
  type: 'horizontalBar',
  data: {
    labels: [
      'Tokyo',
      'Delhi',
      'Shanghai',
      'Sao Paulo',
      'Mexico City',
      'Cairo',
      'Dhaka',
      'Mumbai',
      'Beijing',
      'Osaka'
    ],
    datasets: [{
      label: 'Population',
      data: [
        37435191,
        29399141,
        27058479,
        21846507,
        21671908,
        20484965,
        20283552,
        20185064,
        20035455,
        19222665
      ],
      backgroundColor: '#1f8c87',
      hoverBackgroundColor: '#2abcb6',
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Top 10 Most Populated Cities In The World 2020',
      fontSize: 17,
      fontStyle: 'normal'
    },
    legend: {
      display: false
    },
    animation: {
      duration: 1700
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: true,
          color: '#26292a',
          zeroLineColor:'#26292a'
        }
      }],
      xAxes: [{
        gridLines: {
          display: true,
          color: '#26292a'
        }
      }]
    }
  }
});
