import { useState, Fragment } from "react";
import "./RobotsInfo.css";

/* Successfully Copied Component */
import SuccessfullyCopied from "../Copied/Copied";

const RobotsInfo = ({ show, robotInfo, closeAllInfo }) => {
  const [copiedText, setCopiedText] = useState("");

  const resetState = () => setCopiedText("");

  // render() {
  const { id, name, username, email, phone } = robotInfo;
  const latLng = robotInfo?.address?.geo;

  try {
    show
      ? (document.getElementsByClassName("app-section")[0].style.opacity = 0.2)
      : (document.getElementsByClassName("app-section")[0].style.opacity = 1);
  } catch (error) {
    console.warn(error);
  }

  const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
  };

  const copyContent = (event) => {
    const property = event.currentTarget.id;

    if (
      property === "geo-lat" ||
      property === "geo-lng" ||
      property === "all"
    ) {
      switch (property) {
        case "geo-lat":
          copyToClipboard(`latitude: ${latLng.lat}`);
          setCopiedText("latitude");
          break;
        case "geo-lng":
          copyToClipboard(`longitude: ${latLng.lng}`);
          setCopiedText("longitude");
          break;
        default:
          copyToClipboard(
            `id: ${id}\nname: ${name}\nusername: ${username}\nemail: ${email}\nlatitude: ${latLng.lat}\nlongitude: ${latLng.lng}\nphone: ${phone}`
          );
          setCopiedText("Every information");
      }
    } else {
      const propertyToCopy = Object.entries(robotInfo).filter(
        (robotProperty) => {
          return property === robotProperty[0];
        }
      );

      copyToClipboard(`${propertyToCopy[0][0]}: ${propertyToCopy[0][1]}`);
      setCopiedText(propertyToCopy[0][0]);
    }
  };

  return (
    <Fragment>
      {show ? (
        <div className="overlay">
          <div className="info-container">
            <div className="info-boxes-container">
              <div id="id" className="info-box" onClick={copyContent}>
                <h2>ID</h2>
                <hr />
                <p>{id}</p>
              </div>

              <div id="name" className="info-box" onClick={copyContent}>
                <h2>Name</h2>
                <hr />
                <p>{name}</p>
              </div>

              <div id="username" className="info-box" onClick={copyContent}>
                <h2>Username</h2>
                <hr />
                <p>{username}</p>
              </div>

              <div id="email" className="info-box" onClick={copyContent}>
                <h2>Email</h2>
                <hr />
                <p>{email}</p>
              </div>

              <div id="geo-lat" className="info-box" onClick={copyContent}>
                <h2>Geolocation (Latitude)</h2>
                <hr />
                <p>{latLng?.lat}</p>
              </div>

              <div id="geo-lng" className="info-box" onClick={copyContent}>
                <h2>Geolocation (Longitude)</h2>
                <hr />
                <p>{latLng?.lng}</p>
              </div>

              <div id="phone" className="info-box" onClick={copyContent}>
                <h2>Phone</h2>
                <hr />
                <p>{phone}</p>
              </div>

              <div id="all" className="info-box" onClick={copyContent}>
                <h2>
                  {"< "}Click to copy{" >"}
                </h2>
                <hr />
                <p>Or click here to copy everything</p>
              </div>
            </div>

            <button onClick={closeAllInfo}>Close this box</button>
          </div>

          <SuccessfullyCopied copiedText={copiedText} resetState={resetState} />
        </div>
      ) : null}
    </Fragment>
  );
};

export default RobotsInfo;
