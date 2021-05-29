import React, { Component } from "react";
import { render } from "react-dom";
import "./App.css";
import Header from "./Header";
import MoviesRow from "./MoviesRow";
import MovieDetails from "./MovieDetails";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class App extends Component {
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
        <Router>
          <Route
            path="/moviList"
            render={(props) => (
              <MoviesRow
                HeaderData={this.state.parentTextBoxValue}
                filtercateg={this.state.filtercateg}
                roots={Route}
              />
            )}
          />
          <Route path="/Details" component={MovieDetails} />
        </Router>
        {/* <MoviesRow
          HeaderData={this.state.parentTextBoxValue}
          filtercateg={this.state.filtercateg}
        /> */}
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
