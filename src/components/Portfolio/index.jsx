import React from "react";
import weather from "../../assets/WeatherDash.png";
import readme from "../../assets/Readme.png";
import social from "../../assets/Social.png";
import quiz from "../../assets/Quiz.png";

function Portfolio() {
    return(
        <div className="container d-flex flex-wrap flex-row m-1 justify-content-center">
            <div className="card flex-column m-2 col-5">
                <img src={weather} className="card-img-top" alt="weather app"></img>
                <div className="card-body">
                    <h5 className="card-title">Weather Dashboard</h5>
                    <p className="card-text">This weather dashboard uses Bootstrap, two OpenWeather API calls including One Call and Geocoding, dynamic HTML, and Day.js to bring you the current weather and five day forecast of the city of your choosing.</p>
                    <a href="https://mchughmegan.github.io/Weather-Dashboard/" className="btn btn-primary m-1">Deployed Application</a>
                    <a href="https://github.com/mchughmegan/Weather-Dashboard" className="btn btn-primary m-1">Github Repository</a>
                </div>
            </div>
            <div className="card flex-column m-2 col-5">
                <img src={readme} className="card-img-top" alt="readme generator"></img>
                <div className="card-body">
                    <h5 className="card-title">Professional Readme Generator</h5>
                    <p className="card-text">This project uses node.js to create a Professional README. It simplifies the process of creating a README file. Inquirer and fs were two crucial packages that made the Professional README Generator possible.</p>
                    <a href="https://drive.google.com/file/d/1c6jOkd26Dn45Bjda_fc7sKDg_FuE9qIe/view" className="btn btn-primary m-1">Walkthrough Video</a>
                    <a href="https://github.com/mchughmegan/Professional-README-Generator" className="btn btn-primary m-1">Github Repository</a>
                </div>
            </div>
            <div className="card flex-column m-2 col-5">
                <img src={social} className="card-img-top" alt="social network api"></img>
                <div className="card-body">
                    <h5 className="card-title">Social Network API</h5>
                    <p className="card-text">This project uses MongoDB to create a Social Network API Back End application. Once entering the applicable commands in the terminal to install all necessary dependencies, including dotenv, express, and mongoose, the user will be able to view their routes regarding users, friends, thoughts, and reactions in Insomnia..</p>
                    <a href="https://drive.google.com/file/d/1_r0A9WS0ImiNJni6dzgjceadmuw27xpM/view" className="btn btn-primary m-1">Walkthrough Video</a>
                    <a href="https://github.com/mchughmegan/Social-Network-API" className="btn btn-primary m-1">Github Repository</a>
                </div>
            </div>
            <div className="card flex-column m-2 col-5">
                <img src={quiz} className="card-img-top" alt="code quiz"></img>
                <div className="card-body">
                    <h5 className="card-title">Code Quiz</h5>
                    <p className="card-text">Here, the user gets to play a quiz on coding. The user's initials and score to local storage. Then, they are displayed on a High Scores page. This application uses Javascript, CSS, and HTML</p>
                    <a href="https://mchughmegan.github.io/Code-Quiz/" className="btn btn-primary m-1">Deployed Application</a>
                    <a href="https://github.com/mchughmegan/Code-Quiz" className="btn btn-primary m-1">Github Repository</a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;