import React from "react";
import { TableHeaderComponent } from "./tableHeader";
import "./table-layout.css"

export class TableLayoutComponent extends React.Component {
  render() {
      return (
        <div className="table-container">
            <table>
                <thead>
                    <TableHeaderComponent
                    tableID={this.props.tableID}
                    />
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        </div>
      )
    }
}