import React from "react";
import "./header.css"

export class HeaderComponent extends React.Component {
    render() {
      return (
        <div className="header-container">
            <h1>Retail Spotlight Challenge</h1>

            <div className="api-buttons-container">
              <button onClick={() => {this.props.handleGDPChange();}}>GDP</button>
              <button onClick={() => {this.props.handleWeeklyChange();}}>Weekly</button>
            </div>
        </div>
      )
  };
}