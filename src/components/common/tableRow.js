import React from "react";
import { help } from "../../helper/enum";

export class TableRowComponent extends React.Component {
    render() {
        if (this.props.type === help.tableGDP) {
            return (
                <tr onMouseOver={this.props.onMouseOver}>
                    <td>{this.props.number}</td>
                    <td>{this.props.date}</td>
                    <td>{this.props.value}</td>
                </tr>
            )
        }

        if (this.props.type === "Weekly")
        return (
            <tr onMouseOver={this.props.onMouseOver}>
                <td>{this.props.number}</td>
                <td>{this.props.date}</td>
                <td>{this.props.open}</td>
                <td>{this.props.high}</td>
                <td>{this.props.low}</td>
                <td>{this.props.close}</td>
                <td>{this.props.volume}</td>
            </tr>
        )
    }
}