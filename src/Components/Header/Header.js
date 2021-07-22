import { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <h1 className="header-title">ROBOFRIENDS</h1>
        <input
          className="robots-name-input"
          type="text"
          placeholder="Search robots"
          onChange={this.props.changeRobotsInputValue}
        ></input>
      </header>
    );
  }
}

export default Header;
