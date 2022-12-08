import React from "react";

const styles = {
    footerStyle: {
      background: '#f8e7e7',
      color: '#724060'
    },
    footerContainer: {
        background: '#f8e7e7',
        color: '#724060',
        underline: 'none'
      },
  };

function Footer () {
    return(
        <div classname="container-fluid" style={styles.footerContainer}>
            <footer className="text-center mb-3 mt-5 container-fluid p-4" style={styles.footerStyle}>
            <a className="me-2" href="https://github.com/mchughmegan" style={styles.footerStyle}>Github</a>
            <a className="me-2" href="https://www.linkedin.com/in/mchughmegan" style={styles.footerStyle}>Linkedin</a>
        </footer>
        </div>
    )
}

export default Footer;