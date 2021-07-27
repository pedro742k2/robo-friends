import { Fragment, useState, useEffect } from "react";
import "./CardsSection.css";
import c3poImg from "../../assets/Images/c3po.svg";

/* Robots api */
import Robots from "../../Services/RobotsApi";

/* Robots Info overlay */
import RobotsInfo from "./RobotsInfo/RobotsInfo";

const CardsSection = ({ robotsInput }) => {
  const [robots, setRobots] = useState([]);
  const [showRobotInfo, setShowRobotInfo] = useState({
    show: false,
    robotInfo: [],
  });

  useEffect(() => {
    Robots.then((resolvedRobots) => setRobots(resolvedRobots));
  }, []);

  const showAllInfo = (event) => {
    const robotForInfo = robots.filter((robot) => {
      return robot.id === Number(event.currentTarget.id);
    });

    robotForInfo.length
      ? setShowRobotInfo({
          show: true,
          robotInfo: robotForInfo[0],
        })
      : setShowRobotInfo({
          show: true,
          robotInfo: {
            id: "Not identified",
            name: "C3PO",
            username: "Search Admin",
            email: "c3p0@robosearchadmin.rf",
            address: {
              geo: {
                lat: "Somewhere in the galaxy",
                lng: "Somewhere in the galaxy",
              },
            },
            phone: "Private number",
          },
        });
  };

  const closeAllInfo = () => {
    setShowRobotInfo({
      show: false,
      robotInfo: [],
    });
  };

  const filterRobots = () => {
    const newRobots = robots.filter((robot) =>
      robot.name.toLowerCase().trim().includes(robotsInput.toLowerCase().trim())
    );

    return newRobots.length > 0 ? (
      <section className="app-section">
        {newRobots.map((filteredRobot, newIndex) => (
          <div
            id={filteredRobot.id}
            className="robot-card"
            key={newIndex}
            onClick={showAllInfo}
          >
            <img
              className="card-img"
              alt=""
              src={`https://robohash.org/${filteredRobot.id}`}
            />
            <h1>{filteredRobot.name}</h1>
            <p>{filteredRobot.email}</p>
          </div>
        ))}
      </section>
    ) : (
      <section className="app-section">
        <div className="robot-card no-robots" onClick={showAllInfo}>
          <img className="card-img" alt="" src={c3poImg} />
          <h1>Looks like no robots were found</h1>
          <p>My circuits may be failing</p>
        </div>
      </section>
    );
  };

  return (
    <Fragment>
      <RobotsInfo
        show={showRobotInfo.show}
        robotInfo={showRobotInfo.robotInfo}
        closeAllInfo={closeAllInfo}
      />
      {filterRobots()}
    </Fragment>
  );
};

export default CardsSection;
