const ctx1 = document.getElementById('myDoughnutChart1').getContext('2d');
new Chart(ctx1, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [6.8, 3.2],
            borderColor: ['#3883d9', '#d7dbdb'],
            backgroundColor: ['#3883d9', '#d7dbdb']
        }]},
        options: {
            cutout: 45,
        }

    }, );


    const data = {
        labels: generateLabels(),
        datasets: [
          {
            label: 'D0',
            data: generateData(),
            borderColor: Utils.CHART_COLORS.red,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red),
            hidden: true
          },
          {
            label: 'D1',
            data: generateData(),
            borderColor: Utils.CHART_COLORS.orange,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange),
            fill: '-1'
          }
        ]
      };
      const config = {
        type: 'line',
        data: data,
        options: {
          scales: {
            y: {
              stacked: true
            }
          },
          plugins: {
            filler: {
              propagate: false
            },
            'samples-filler-analyser': {
              target: 'chart-analyser'
            } },
            interaction: {
              intersect: false,
            },
          },
        };
        const inputs = {
            min: 20,
            max: 80,
            count: 8,
            decimals: 2,
            continuity: 1
          };
          
          const generateLabels = () => {
            return Utils.months({count: inputs.count});
          };
          
          const generateData = () => (Utils.numbers(inputs));
          
          Utils.srand(42);
          let smooth = false;
let propagate = false;
