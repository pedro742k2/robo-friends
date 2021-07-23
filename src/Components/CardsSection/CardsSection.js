import { Component, Fragment } from "react";
import "./CardsSection.css";
import noRobotsImg from "../../assets/Images/c3po.svg";

/* Robots api */
import Robots from "../../Services/RobotsApi";

class CardsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    Robots.then((resolvedRobots) => this.setState({ robots: resolvedRobots }));
  }

  filterRobots = () => {
    const newRobots = this.state.robots.filter((robot) =>
      robot.name
        .toLowerCase()
        .trim()
        .includes(this.props.robotsInput.toLowerCase().trim())
    );

    return newRobots.length > 0 ? (
      <section className="app-section">
        {newRobots.map((filteredRobots, newIndex) => (
          <div className="robot-card" key={newIndex}>
            <img
              className="card-img"
              alt=""
              src={`https://robohash.org/${filteredRobots.id}`}
            />
            <h1>{filteredRobots.name}</h1>
            <p>{filteredRobots.email}</p>
          </div>
        ))}
      </section>
    ) : (
      <section className="app-section">
        <div className="robot-card no-robots">
          <img className="card-img" alt="" src={noRobotsImg} />
          <h1>Looks like no robots were found</h1>
          <p>My circuits may be failing</p>
        </div>
      </section>
    );
  };

  render() {
    return <Fragment>{this.filterRobots()}</Fragment>;
  }
}

export default CardsSection;
