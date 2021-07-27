import { useState } from "react";
import "./App.css";

/* Components */
import CardsSection from "../Components/CardsSection/CardsSection";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Scroll from "../Components/Scroll/Scroll";

const App = () => {
  const [robotsInput, setRobotsInput] = useState("");

  const changeRobotsInputValue = (text) => setRobotsInput(text.target.value);

  return (
    <div className="App">
      <Header changeRobotsInputValue={changeRobotsInputValue} />
      <Scroll>
        <CardsSection robotsInput={robotsInput} />
      </Scroll>

      <Footer />
    </div>
  );
};

export default App;
