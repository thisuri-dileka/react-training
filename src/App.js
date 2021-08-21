import logo from "./logo.svg";
import "./App.css";
import { Link, useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  const handleLoginClick = () => {
    console.log("login is clicked");
    history.push("login");
  };

  const handleProfileClick = () => {
    console.log("Profile is clicked");
    history.push("profile");
  };

  const handleRegisterClick = () => {
    console.log("Register is clicked");
    history.push("register");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello I'm Thisuri</p>
        <h1>Welcome!!</h1>
        <Link to={"login"}>Login</Link>
        <Link to={"profile"}>Profile</Link>
        <Link to={"register"}>Register</Link>

        <button type="button" onClick={handleLoginClick}>
          Login
        </button>
        <button type="button" onClick={handleProfileClick}>
          Profile
        </button>
        <button type="button" onClick={handleRegisterClick}>
          Register
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
