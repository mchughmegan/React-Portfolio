import React from "react";
import profile from "../../assets/ava.jpg";

function About() {
  return (
    <div>
      <img className="img-fluid col-4"src={profile}></img>
      <p className="text-left">
        Lifelong learner currently working on a certification in full-stack web
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
