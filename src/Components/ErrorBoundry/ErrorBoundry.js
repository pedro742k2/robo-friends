import { Component } from "react";
import "./ErrorBoundry.css";

class ErrorBoundry extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError)
      return (
        <div className="error-boundry-box">
          <h1>
            That's not good...
            <br /> Looks like you're offline
          </h1>
        </div>
      );

    return this.props.children;
  }
}

export default ErrorBoundry;
