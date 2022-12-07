import React from "react";
function Contact() {
  return (
    <div className="contactContainer row">
      <div className="leftContainer col-5">
        <h3 className="text-center">Contact Me</h3>
        <p className="text-left">If you need any additional information, please click <a href="https://docs.google.com/forms/d/e/1FAIpQLScL_wd78-OYjCi0SkFAnXSbA01FPDPVHtRj4y0_sAC5ISqcIw/viewform?usp=pp_url&entry.710989998=Full+Name&entry.389136940=email@email.com&entry.552445963=Info+regarding+contact">
        here
      </a>.</p>
      </div>
      <div className="rightContainer col-5">
        <h3 className="text-center">Github</h3>
        <p className="text-left">To view other applications I have created, or to see the journey of my application creations, feel free to visit my <a href="https://github.com/mchughmegan">
        GitHub
      </a>.</p>
      <h3 className="text-center">LinkedIn</h3>
      <p className="text-left">Additionally, feel free to connect with my via <a href="https://github.com/mchughmegan">
        LinkedIn
      </a>.</p>
      </div>     
    </div>
  );
}

export default Contact;
