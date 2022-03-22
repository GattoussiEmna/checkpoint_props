import React from "react";
import { PropTypes } from "prop-types";
import "./Profile.css";

const Profile = ({ name, profession, bio, children, fun ,url}) => {
  
  return (

    <div className="card">
      <div className="content">
          
        <h1>{name}</h1>
        <h2>{profession}</h2>
        <h2>{bio}</h2>
      </div>
      <img src = {url}  />
      <br/>
      <button onClick={()=>alert(name)}>Click here !</button>
    </div>
    
  );
};

Profile.propTypes={
  name : PropTypes.number
}

Profile.defaultProps = {
    name: "none",
    profession: "none",
    bio: "none",
  };
export default Profile;

