import { useState } from "react";
import "./App.css";

/* Containers */
import CardsSection from "./CardsSection/CardsSection";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

/* Components */
import Scroll from "../Components/Scroll/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry/ErrorBoundry";

const App = () => {
  const [robotsInput, setRobotsInput] = useState("");

  const changeRobotsInputValue = (text) => setRobotsInput(text.target.value);

  return (
    <div className="App">
      <Header changeRobotsInputValue={changeRobotsInputValue} />
      <Scroll>
        <ErrorBoundry>
          <CardsSection robotsInput={robotsInput} />
        </ErrorBoundry>
      </Scroll>

      <Footer />
    </div>
  );
};

export default App;
