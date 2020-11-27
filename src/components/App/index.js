import LoginButton from "../LoginButton";
import "./App.css";
import LogoutButton from "../LogOutButton";
import Profile from "../Profile";
import Bank from "../Bank";
import banner from "./bank1.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={banner} />
        <LoginButton />
        <LogoutButton />
      </header>
    </div>
  );
}

export default App;
