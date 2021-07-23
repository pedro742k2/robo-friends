import { Component, Fragment } from "react";
import "./RobotsInfo.css";

class RobotsInfo extends Component {
  render() {
    const { id, name, username, email, phone } = this.props.robotInfo.robotInfo;
    const latLng = this.props.robotInfo.robotInfo?.address?.geo;
    const { show } = this.props.robotInfo;

    try {
      show
        ? (document.getElementsByClassName(
            "app-section"
          )[0].style.opacity = 0.2)
        : (document.getElementsByClassName("app-section")[0].style.opacity = 1);
    } catch (error) {
      console.warn(error);
    }

    return (
      <Fragment>
        {show ? (
          <div className="overlay">
            <div className="info-box">
              <h2>ID</h2>
              <hr />
              <p>{id}</p>
            </div>
            <div className="info-box">
              <h2>Name</h2>
              <hr />
              <p>{name}</p>
            </div>
            <div className="info-box">
              <h2>Username</h2>
              <hr />
              <p>{username}</p>
            </div>
            <div className="info-box">
              <h2>Email</h2>
              <hr />
              <p>{email}</p>
            </div>
            <div className="info-box">
              <h2>Geolocation (Latitude)</h2>
              <hr />
              <p>{latLng?.lat}</p>
            </div>
            <div className="info-box">
              <h2>Geolocation (Longitude)</h2>
              <hr />
              <p>{latLng?.lng}</p>
            </div>
            <div className="info-box">
              <h2>Phone</h2>
              <hr />
              <p>{phone}</p>
            </div>

            <button onClick={this.props.closeAllInfo}>Close this box</button>
          </div>
        ) : (
          <Fragment />
        )}
      </Fragment>
    );
  }
}

export default RobotsInfo;
