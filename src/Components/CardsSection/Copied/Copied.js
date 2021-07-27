import { Fragment, useEffect } from "react";
import "./Copied.css";

const Copied = () => {
  useEffect(() => {
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

    return () => {
      /* Clear every timeout available before unmounting*/
      this.props.resetState();
      let id = window.setTimeout(function () {}, 0);

      while (id--) {
        window.clearTimeout(id);
      }
    };
  });

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
};

export default Copied;
