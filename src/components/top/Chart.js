import React from "react";
import Chart from "chart.js/auto";
import "./Chart.css"
import { help } from "../../helper/enum";
import { backgroundColor } from "../../helper/chartHelper";

export class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.chartRef = React.createRef();
    this.mounted = false;
  };
  
  componentDidMount() {
    if (this.mounted) {
      return;
    }
    
    const ctx = this.chartRef.current.getContext("2d");

    this.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    this.mounted = true;
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      // Set the table to be updated
      this.reloadChartData();
    }
  }

  reloadChartData() {
    this.chart.data.labels = this.state.labels;
    var newData
    var chartDataValues = []
    var chartLabelValues = []

    // TODO sort out later
    if (this.props.tableID === "GDP") {
      newData = Object.values(this.props.data)[3];

      newData.map(dataSets => (
        chartDataValues.push(dataSets.value),
        chartLabelValues.push(dataSets.date)
      ));
        
      this.chart.data.labels = chartLabelValues;

      this.chart.data.datasets = [{
        label: "GDP",
        data: chartDataValues,
        backgroundColor: 'rgb(75, 192, 192)',
        fill: false
      }]
    }

    // TODO sort out later
    if (this.props.tableID === "Weekly") {
      newData = Object.values(this.props.data[help.Data]);
      var a = Object.keys(this.props.data[help.Data])
      chartDataValues = [[],[],[],[],[]]
      chartLabelValues = []

      // Not the best way but works.
      newData.map((dataSets, number) => (
        chartDataValues[0].push(dataSets[help.open]),
        chartDataValues[1].push(dataSets[help.high]),
        chartDataValues[2].push(dataSets[help.low]),
        chartDataValues[3].push(dataSets[help.close]),
        chartDataValues[4].push(dataSets[help.volume]),
        chartLabelValues.push(a[number])
      ));

      this.chart.data.labels = chartLabelValues;

      this.chart.data.datasets = chartDataValues.map((dataSets, number) => ({
        label: number,
        data: dataSets,
        backgroundColor: backgroundColor[number],
        fill: false
      }));
    }

    this.chart.update();
  }

  render() {
    return (
      <div className="chart-container">
        <canvas
          className="chart-canvas"
          id="chart-gdp"
          ref={this.chartRef}
        />
      </div>
    )
  };
}