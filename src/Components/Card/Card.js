import { Component, Fragment } from "react";
import "./Card.css";
import { robots } from "../../assets/robots";

class Cards extends Component {
  changeRobots = () => {
    const newRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(this.props.robotsInput.toLowerCase())
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
    return (
      <Fragment>
        {this.props.robotsInput === "" ? (
          <section className="app-section">
            {robots.map((robot, index) => (
              <div className="robot-card" key={index}>
                <img alt="" src={`https://robohash.org/${robot.id}`} />
                <h1>{robot.name}</h1>
                <p>{robot.email}</p>
              </div>
            ))}
          </section>
        ) : (
          this.changeRobots()
        )}
      </Fragment>
    );
  }
}

export default Cards;
