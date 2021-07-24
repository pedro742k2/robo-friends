import { Component, Fragment } from "react";
import "./Copied.css";

class Copied extends Component {
  componentWillUnmount() {
    /* Clear every timeout available */
    this.props.resetState();
    let id = window.setTimeout(function () {}, 0);

    while (id--) {
      window.clearTimeout(id);
    }
  }

  componentDidUpdate() {
    let id = window.setTimeout(function () {}, 0);

    while (id--) {
      window.clearTimeout(id);
    }

    try {
      const container = document.getElementsByClassName(
        "successfully-copied-container"
      )[0];

      container.style.display = "flex";

      setTimeout(() => {
        container.style.display = "none";
      }, 5000);
    } catch (error) {
      console.warn("Nothing to clear", error);
    }
  }

  render() {
    const { copiedText } = this.props;

    return (
      <Fragment>
        {copiedText.length ? (
          <div className="successfully-copied-container">
            <p>
              <span>Copied </span>
              <b>{copiedText}</b>
            </p>
          </div>
        ) : null}
      </Fragment>
    );
  }
}

export default Copied;
