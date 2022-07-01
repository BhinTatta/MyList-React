import React from "react";
import "./Profile.css";

function Profile(props) {
  return (
    <div className="profile">
      <div className="profilePhoto">
        <img className="profilePhotoIMG" src={props.photo}></img>
      </div>
      <div className="profileName">
        <h1> {props.name} </h1>
      </div>
    </div>
  );
}

export default Profile;
