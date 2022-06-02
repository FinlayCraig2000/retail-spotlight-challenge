import React from "react";
import { help } from "../../helper/enum";
import { TableHeaderComponent } from "../common/tableHeader";
import { TableRowComponent } from "../common/tableRow";
import "./Table.css"

export class TableWeeklyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        updated: false,
    };
  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data && this.props.tableID === help.tableWeekly) {
      // Set the table to be updated
      this.setState({
        updated: true,
      })
    }
  }

  getListDate(number) {
    return Object.keys(this.props.data[help.Data])[number];
  }

  getListAmount(listData) {
    return listData
  }

  getListOpen(listData) {
    return listData[help.open]
  }

  getListHigh(listData) {
    return listData[help.high]
  }

  getListLow(listData) {
    return listData[help.low]
  }

  getListClose(listData) {
    return listData[help.close]
  }

  getListVolume(listData) {
    return listData[help.volume]
  }

  render() {

    // Check if there are any errors
    if (this.props.error) {
        return <div className="table-container">Error: {this.props.error.message}</div>;
    } 
    
    // Check if table isloading
    if (!this.props.isLoaded) {
        return <div className="table-container">Loading...</div>;
    }

    var newData = Object.values(this.props.data[help.Data]);

    return (
      <div className="table-container">
        <table>
          <thead>
            <TableHeaderComponent
              tableID={this.props.tableID}
            />
          </thead>
          <tbody>
            {newData.map((item, itemNumber) => {
                return <TableRowComponent
                  onMouseOver={this.props.onMouseOver}
                  type={help.tableWeekly}
                  key={itemNumber}
                  number={itemNumber}
                  date={this.getListDate(itemNumber)}
                  open={this.getListOpen(item)}
                  high={this.getListHigh(item)}
                  low={this.getListLow(item)}
                  close={this.getListClose(item)}
                  volume={this.getListVolume(item)}
                />
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}