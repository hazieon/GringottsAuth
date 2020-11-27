import LoginButton from "../LoginButton";
import "./App.css";
import LogoutButton from "../LogOutButton";
import Profile from "../Profile";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
        <LoginButton />
        <LogoutButton />
      </header>
    </div>
  );
}

export default App;
