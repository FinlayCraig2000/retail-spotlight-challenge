import React from "react";
import { AppContainer } from "./components/AppContainer";
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
      return (
        <AppContainer />
      )
  };
}