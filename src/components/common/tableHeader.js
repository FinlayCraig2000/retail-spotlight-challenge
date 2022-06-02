import React from "react";
import { help } from "../../helper/enum";

export class TableHeaderComponent extends React.Component {
  render() {
        if(this.props.tableID === help.tableGDP) {
            return (
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Value ({help.BillionsOfDollars})</th>
                </tr>
                )
            }
        if (this.props.tableID === help.tableWeekly) {
            return (
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Close</th>
                    <th>Volume</th>
                </tr>
            )
        }
    }
}