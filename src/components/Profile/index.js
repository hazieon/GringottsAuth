import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
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
        <img className="profile-img" src={user.picture} alt={user.name} />
        <div className="user-text">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
    )
  );
};

export default Profile;
