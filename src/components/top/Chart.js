import React from "react";
import Chart from "chart.js/auto";
import { help } from "../../helper/enum";
import { backgroundColor, weeklyChartTopLabels } from "../../helper/chartHelper";
import "./Chart.css"
import { RangeInputComponent } from "../common/input-range";

export class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.chartRef = React.createRef();
    this.mounted = false;

    // Chart information
    this.newData = null;
    this.chartDataValues = [];
    this.chartLabelValues = [];
  };
  
  componentDidMount() {
    // Check to see if chart is mounted
    if (this.mounted) {
      return;
    }
    
    const ctx = this.chartRef.current.getContext("2d");

    // Default chart
    this.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            animation: false
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

  clearChartData() {
    // Clear chart data
    this.newData = null;
    this.chartDataValues = [];
    this.chartLabelValues = [];
  }

  reloadChartData() {
    // Clear any left over data
    this.clearChartData();

    // Check what data to load chart data from
    if (this.props.tableID === help.tableGDP) {
      this.gdpChartUpdate();
    }

    if (this.props.tableID === help.tableWeekly) {
      this.weeklyChartUpdate();
    }

    this.chart.update();
  }

  gdpChartUpdate() {
    this.newData = Object.values(this.props.data)[3];

    // Filling in the data from API in to arrays
    for (const dataSets of this.newData) {
      this.chartDataValues.push(dataSets.value);
      this.chartLabelValues.push(dataSets.date);
    }

    // Bottom labels
    this.chart.data.labels = this.chartLabelValues;

    // Adding the data to the chart
    this.chart.data.datasets = [{
      label: "GDP",
      data: this.chartDataValues,
      backgroundColor: backgroundColor[0],
      fill: false
    }]
  }

  weeklyChartUpdate() {
      // Changing default values to weekly information (excluding the dates)
      this.newData = Object.values(this.props.data[help.Data]);
      this.chartDataValues = [[],[],[],[],[]]

      // Not the best way but works.
      for (const dataSets of this.newData) {
        this.chartDataValues[0].push(dataSets[help.open]);
        this.chartDataValues[1].push(dataSets[help.high]);
        this.chartDataValues[2].push(dataSets[help.low]);
        this.chartDataValues[3].push(dataSets[help.close]);
        this.chartDataValues[4].push(dataSets[help.volume]);
      }

      // Changing to get date values of JSON data
      this.newData = Object.keys(this.props.data[help.Data]);

      // Pushing date values into array for chart
      for (var i = 0; i < this.newData.length; i++) {
        this.chartLabelValues.push(this.newData[i]);
      }

      // Bottom labels
      this.chart.data.labels = this.chartLabelValues;

      // Adding the data to the chart
      this.chart.data.datasets = this.chartDataValues.map((dataSets, number) => ({
        label: weeklyChartTopLabels[number],
        data: dataSets,
        backgroundColor: backgroundColor[number],
        fill: false
      }));

      // console.log(this.chart.data.datasets)
  }

  handleChange(props) {
    console.log(props.target.value)
    // console.log(this.newData)
  }

  render() {
    return (
      <div className="chart-container">
        <div className="canvas-chart-container">
          <canvas
            className="chart-canvas"
            id="chart-gdp"
            ref={this.chartRef}
          />
        </div>

        <div className="chart-setting-container">
          <RangeInputComponent
            max={this.props.data}
          />
        </div>
      </div>
    )
  };
}