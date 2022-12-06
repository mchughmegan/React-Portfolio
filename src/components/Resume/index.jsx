import React from "react";
import resumeOne from "../../assets/ResumePageOne.png";
import resumeTwo from "../../assets/ResumePageTwo.png";

function Resume () {
    return(
        <div className="row m-1 d-flex justify-content-around">
            <img className="img-fluid col-5 m-1"src={resumeOne}></img>
            <img className="img-fluid col-5 m-1"src={resumeTwo}></img>
        </div>
    )
}

export default Resume;