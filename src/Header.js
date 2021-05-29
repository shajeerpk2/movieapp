import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    if (e.key === "Enter") {
      this.props.handleData(e.target.value);
    }
    if (e.target.value == "") {
      this.props.handleData(e.target.value);
    }
  }

  HandleButtonClick = (categ) => {
    console.log("categ", categ.target.value);
    this.props.handleCategDate(categ.target.value);
  };

  // HandleButtonClick(categ) {}

  render() {
    return (
      <div className="Header_component">
        <div className="HeaderLeft">
          <img
            alt="newImage"
            src="data:image/png;base64,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"
          ></img>

          <div className="HeaderInput">
            <input
              placeholder="Search movies"
              onKeyUp={this.handleKeyUp}
            ></input>
          </div>
        </div>

        <div className="HeaderRight">
          <div className="CategoryButton">
            <button value="0" onClick={this.HandleButtonClick}>
              Show All
            </button>
          </div>
          <div className="CategoryButton">
            <button value="28" onClick={this.HandleButtonClick}>
              Action
            </button>
          </div>
          <div className="CategoryButton">
            <button value="27" onClick={this.HandleButtonClick}>
              Horror
            </button>
          </div>
          <div className="CategoryButton">
            <button value="35" onClick={this.HandleButtonClick}>
              Comedy
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
