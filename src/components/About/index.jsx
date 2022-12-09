import React from "react";
import profile from "../../assets/profile.jpg";

function About() {
  return (
    <div className="row m-3 d-flex justify-content-center">
      <h1 className="text-center">Welcome</h1>
      <img className="img-fluid col-2 row justify-content-center"src={profile}></img>
      <p className="text-left row">
        Lifelong learner currently working on a certificate in full stack web
        development through the University of Texas at Austin coding bootcamp. A
        wide range of experiences in both planning and working with a team.
        Strengths include understanding each persons individual skills,
        presenting information to audiences of many backgrounds and educational
        levels, and understanding how each piece of a project contributes to
        that projects purpose.
      </p>
    </div>
  );
}

export default About;
