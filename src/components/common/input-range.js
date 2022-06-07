import React from "react";

export class RangeInputComponent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        beginningDate: null,
        endingDate: null,
      }
    };

    handleChange(props) {
      console.log(props.target.value)
      this.setState({
        updated: true,
      })
    }

    render() {
      return (
        <div className="date-range-setting">
            <span>{this.state.beginningDate}</span>
            <input onChange={this.handleChange} type="range" max={this.props.max ?? "100"} />
            <span>{this.state.endingDate}</span>
        </div>
      )
  };
}