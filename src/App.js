import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import MoviesRow from "./MoviesRow";

class App extends Component {
  constructor() {
    super();
    this.state = {
      parentTextBoxValue: "",
      filtercateg: "",
    };
  }

  render() {
    return (
      <div className="App">
        <Header
          handleData={this.handleParentData}
          handleCategDate={this.handleCategData}
        />
        <MoviesRow
          HeaderData={this.state.parentTextBoxValue}
          filtercateg={this.state.filtercateg}
        />
      </div>
    );
  }

  handleParentData = (e) => {
    this.setState({ parentTextBoxValue: e });
  };

  handleCategData = (categ) => {
    this.setState({ filtercateg: categ });
    console.log("categ123", categ);
  };
}

export default App;
