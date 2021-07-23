import { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <h1>
          This web app was developed by{" "}
          <span id="signature">Pedro Batista</span>
        </h1>
        <p>
          Based on <i>"Zero To Mastery"</i> Web Development course{" "}
          <i>"Robofriends"</i> App
        </p>
      </footer>
    );
  }
}

export default Footer;
