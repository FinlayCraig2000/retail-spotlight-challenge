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

            {this.props.children}

            <FooterComponent />
        </div>
      )
  };
}