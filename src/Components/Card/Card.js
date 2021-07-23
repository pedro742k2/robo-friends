import { Component, Fragment } from "react";
import "./Card.css";

/* Robots api */
import Robots from "../../Services/RobotsApi";

class Cards extends Component {
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

    return (
      <section className="app-section">
        {newRobots.map((filteredRobots, newIndex) => (
          <div className="robot-card" key={newIndex}>
            <img alt="" src={`https://robohash.org/${filteredRobots.id}`} />
            <h1>{filteredRobots.name}</h1>
            <p>{filteredRobots.email}</p>
          </div>
        ))}
      </section>
    );
  };

  render() {
    return <Fragment>{this.filterRobots()}</Fragment>;
  }
}

export default Cards;
