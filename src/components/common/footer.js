import React from "react";
import "./footer.css"

export class FooterComponent extends React.Component {
    render() {
      return (
        <div className="footer-container">
            <footer>
              <p>Create by: Finlay Craig</p>
              <p>Retail Spotlight Frontend Challenge</p>
            </footer>
        </div>
      )
  };
}