import React from "react";
import { currency, help } from "../../helper/enum";
import { TableLayoutComponent } from "../common/table-layout";
import { TableRowComponent } from "../common/tableRow";
import "./Table.css"

export class TableGDPComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: false,
        };
    };

    componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data && this.props.tableID === help.tableGDP) {
        // Set the table to be updated
        this.setState({
        updated: true,
        })
    }
    }

    getListDate(data) {
    return data.date;
    }

    getListValue(data) {
        return currency.dollar + data.value
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

    var newData = Object.values(this.props.data)[3];

    return (
        <TableLayoutComponent
        tableID={this.props.tableID}
        >
            {newData.map((item, itemNumber) => {
                return <TableRowComponent
                    onMouseOver={this.props.onMouseOver}
                    type={help.tableGDP}
                    key={itemNumber}
                    number={itemNumber}
                    date={this.getListDate(item)}
                    value={this.getListValue(item)}
                />
                })
            }
        </TableLayoutComponent>
        );
    }
}