import React from "react";
import resumeOne from "../../assets/ResumePageOne.png";
import resumeTwo from "../../assets/ResumePageTwo.png";

const styles = {
  resumeStyle: {
    background: "#f8e7e7",
    color: "#724060",
  },
};

function Resume() {
  return (
    <div className="row m-1 d-flex justify-content-around">
      <img className="img-fluid col-5 m-1" src={resumeOne}></img>
      <img className="img-fluid col-5 m-1" src={resumeTwo}></img>
      <p>
        For a pdf copy of the resume, please go{" "}
        <a
          style={styles.resumeStyle}
          href="https://drive.google.com/file/d/1R-xBiK3kHzYhHR82ZRm3PtQwW12xwXX1/view?usp=sharing"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}

export default Resume;
