import React from "react";
import { HeaderComponent } from "./header";
import { FooterComponent } from "./footer";

export class BasicLayoutComponent extends React.Component {
    render() {
      return (
        <div className="app-container">
            <HeaderComponent
                handleGDPChange={this.props.handleGDPChange}
                handleWeeklyChange={this.props.handleWeeklyChange}
            />
              <div className="retail-information-container">
                {this.props.children}
              </div>
            <FooterComponent />
        </div>
      )
  };
}