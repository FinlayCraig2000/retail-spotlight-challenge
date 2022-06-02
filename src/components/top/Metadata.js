import React from "react";
import { metaData } from "../../helper/enum";
import "./Metadata.css"

// TODO later, not needed

export class MetaDataComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: this.props.data,
        information: metaData.InformationData,
        symbol: metaData.SymbolData,
        lastRefreshed: metaData.LastRefreshedData,
        timeZone: metaData.TimeZoneData,
    };
  };

  render() {
      return (
        <div className="meta-data-container">
            <span>{metaData.Information}:  {this.state.information}</span>
            <span>{metaData.Symbol}:  {this.state.symbol}</span>
            <span>{metaData.LastRefreshed}:  {this.state.lastRefreshed}</span>
            <span>{metaData.TimeZone}:  {this.state.timeZone}</span>
        </div>
      )
  };
}