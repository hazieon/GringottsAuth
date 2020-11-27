import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogOutButton";
import "./index.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(user);
  return (
    isAuthenticated && (
      <div className="auth-container">
        <div className="user-text">
          <img className="profile-img" src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <LogoutButton />
        </div>
      </div>
    )
  );
};

export default Profile;
