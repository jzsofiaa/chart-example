let topThreeCities = document.getElementById('line-chart').getContext('2d');


let lineChart = new Chart(topThreeCities, {
  type: 'line',
  data: {
    labels: [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020],
    datasets: [
      {
        label: 'Tokyo',
        data: [11274641, 16678821, 23297503, 28548512, 32530003, 34449908, 36859626, 37435191],
        fill: false,
        borderColor: '#b82567',
        backgroundColor: '#b82567',
        pointHoverBackgroundColor: '#df6099',
        pointHoverBorderColor: '#df6099',
        borderWidth: 2
      },
      {
        label: 'Delhi',
        data: [1369369, 2282962, 3530693, 5587014, 9384209, 15691899, 21987895, 29399141],
        fill:false,
        borderColor: '#2b8871',
        backgroundColor: '#2b8871',
        pointHoverBackgroundColor: '#4ec7a9',
        pointHoverBorderColor: '#4ec7a9',
        borderWidth: 2
      },
      {
        label: 'Sanghai',
        data: [4288091, 6865312, 6052468, 5927898, 8605812, 14246541, 20314309, 27058479],
        fill: false,
        borderColor: '#efdd99',
        backgroundColor:'#efdd99',
        pointHoverBackgroundColor: '#fcf9ee',
        pointHoverBorderColor: '#fcf9ee',
        borderWidth: 2
      }
    ]},
  options: {
    animation: {
      duration: 1700
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        boxWidth: 13
      }
    },
    title: {
      display: true,
      text: 'Top 3 Most Populated Cities In The World 1950-2020',
      fontSize: 17,
      fontStyle: 'normal'
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
})
