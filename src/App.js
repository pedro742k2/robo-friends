import { Component } from "react";
import "./App.css";

/* Components */
import CardsSection from "./Components/CardsSection/CardsSection";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Scroll from "./Components/Scroll/Scroll";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robotsInput: "",
    };
  }

  changeRobotsInputValue = (text) =>
    this.setState({
      robotsInput: text.target.value,
    });

  render() {
    return (
      <div className="App">
        <Header changeRobotsInputValue={this.changeRobotsInputValue} />
        <Scroll>
          <CardsSection robotsInput={this.state.robotsInput} />
        </Scroll>

        <Footer />
      </div>
    );
  }
}

export default App;
