import { Component, Fragment } from "react";
import "./CardsSection.css";
import noRobotsImg from "../../assets/Images/c3po.svg";

/* Robots api */
import Robots from "../../Services/RobotsApi";

/* Robots Info overlay */
import RobotsInfo from "./RobotsInfo/RobotsInfo";

class CardsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
      showRobotInfo: {
        show: false,
        robotInfo: [],
      },
    };
  }

  componentDidMount() {
    Robots.then((resolvedRobots) => this.setState({ robots: resolvedRobots }));
  }

  showAllInfo = (event) => {
    const robotForInfo = this.state.robots.filter((robot) => {
      return robot.id === Number(event.currentTarget.id);
    });

    robotForInfo.length
      ? this.setState({
          showRobotInfo: {
            show: true,
            robotInfo: robotForInfo[0],
          },
        })
      : this.setState({
          showRobotInfo: {
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
          },
        });
  };

  closeAllInfo = () => {
    this.setState({
      showRobotInfo: {
        show: false,
        robotInfo: [],
      },
    });
  };

  filterRobots = () => {
    const newRobots = this.state.robots.filter((robot) =>
      robot.name
        .toLowerCase()
        .trim()
        .includes(this.props.robotsInput.toLowerCase().trim())
    );

    return newRobots.length > 0 ? (
      <section className="app-section">
        {newRobots.map((filteredRobot, newIndex) => (
          <div
            id={filteredRobot.id}
            className="robot-card"
            key={newIndex}
            onClick={this.showAllInfo}
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
        <div className="robot-card no-robots" onClick={this.showAllInfo}>
          <img className="card-img" alt="" src={noRobotsImg} />
          <h1>Looks like no robots were found</h1>
          <p>My circuits may be failing</p>
        </div>
      </section>
    );
  };

  render() {
    return (
      <Fragment>
        <RobotsInfo
          show={this.state.showRobotInfo.show}
          robotInfo={this.state.showRobotInfo.robotInfo}
          closeAllInfo={this.closeAllInfo}
        />
        {this.filterRobots()}
      </Fragment>
    );
  }
}

export default CardsSection;
