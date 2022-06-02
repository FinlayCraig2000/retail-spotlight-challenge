import React from "react";
import { BasicLayoutComponent } from "./common/layout";
import { TableWeeklyComponent } from "./top/TableWeekly";
import { TableGDPComponent } from "./top/TableGDP";
import { ChartComponent } from "./top/Chart";
import { help } from "../helper/enum";
import "./AppContainer.css"

export class AppContainer extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
            tableID: help.tableGDP,
            tableHover: null,
            error: null,
            isLoaded: false,
            data: null,
        };

        this.handleGDPChange = this.handleGDPChange.bind(this);
        this.handleWeeklyChange = this.handleWeeklyChange.bind(this);
        // this.handleTableHover = this.handleTableHover(this);
    };

    componentDidMount() {
        this.handleFetchData(help.apiURLGDP);
    }

    handleFetchData(api) {
        fetch(api)
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    data: result,
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    handleGDPChange() {
        this.setState({
            isLoaded: false,
            tableID: help.tableGDP,
        }, this.handleFetchData(help.apiURLGDP));
    }

    handleWeeklyChange() {
        this.setState({
            isLoaded: false,
            tableID: help.tableWeekly,
        }, this.handleFetchData(help.apiURLWeekly));
    }

    handleTableHover = props => {
        // console.log(props.target.innerText)
        // this.setState({
        //     tableHover: props.target.innerText
        // });
    }

    render() {
        if (this.state.tableID === help.tableGDP) {
            return (
                <BasicLayoutComponent
                    handleGDPChange={this.handleGDPChange}
                    handleWeeklyChange={this.handleWeeklyChange}
                >

                    <div className="retail-information-container GDP">
                        <TableGDPComponent
                            onMouseOver={this.handleTableHover}
                            tableID={this.state.tableID}
                            error={this.state.error}
                            isLoaded={this.state.isLoaded}
                            data={this.state.data}
                        />

                        <ChartComponent 
                            data={this.state.data}
                            tableID={this.state.tableID}
                        />
                    </div>
                </BasicLayoutComponent>
            );
        }

        if (this.state.tableID ===  help.tableWeekly) {
            return (
                <BasicLayoutComponent
                    handleGDPChange={this.handleGDPChange}
                    handleWeeklyChange={this.handleWeeklyChange}
                >
                    <div className="retail-information-container Weekly">
                        <TableWeeklyComponent
                            onMouseOver={this.handleTableHover}
                            tableID={this.state.tableID}
                            isActive={this.state.isActive}
                            error={this.state.error}
                            isLoaded={this.state.isLoaded}
                            data={this.state.data}
                        />

                        <ChartComponent 
                            data={this.state.data}
                            tableID={this.state.tableID}
                        />
                    </div>
                </BasicLayoutComponent>
            );
        }

        return <div className="error-container"> Error </div>
    };
}