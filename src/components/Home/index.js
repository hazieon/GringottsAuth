import React from "react";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogOutButton";
import banner from "./bank1.png";
import "./Home.css";

function Home() {
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

export default Home;
