import { Chart, registerables } from "chart.js";

export function lineGraphComponent({ id, type, dataSets, xAxisLabels }) {
  var ctx = document.getElementById(id).getContext("2d");

  Chart.register(...registerables);
  var myChart = new Chart(ctx, {
    type: type ? type : "line",
    data: {
      labels: xAxisLabels,
      datasets: dataSets,
    },
    options: {
      scales: {
        x: {
          display: type === "pie" ? false : true,
          grid: {
            color: "transparent",
          },
          stacked: true
        },

        y: {
          display: type === "pie" ? false : true,
          grid: {
            color: "transparent",
          },
          stacked: true
        },
      },
      plugins: {
        legend: { position: "right" },
        labels: {
          render: 'value',
          fontColor: ['green', 'white', 'red']
        }
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
  return myChart;
}
