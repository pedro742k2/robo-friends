import "./Header.css";

const Header = ({ changeRobotsInputValue }) => {
  return (
    <header className="app-header">
      <h1 className="header-title">ROBOFRIENDS</h1>
      <input
        className="robots-name-input"
        type="text"
        placeholder="Search robots 🤖"
        onChange={changeRobotsInputValue}
      ></input>
    </header>
  );
};

export default Header;
