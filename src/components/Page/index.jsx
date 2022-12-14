import React from "react";
import PageContent from "../PageContent/index.jsx";
import About from "../About/index.jsx";
import Portfolio from "../Portfolio/index.jsx";
import Resume from "../Resume/index.jsx";
import Contact from "../Contact/index.jsx";

const styles = {
    pageStyle: {
      background: '#fdf3f3',
      color: '#724060'
    },
  };

function Page({currentPage}){
    const renderPage = () =>{
        switch (currentPage.name){
            case 'About Me':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Resume':
                return <Resume />;
            case 'Contact':
                return <Contact />;
            default :
                return <About/>;
        }
    };
    return (
        <section style={styles.pageStyle} className="p-4 container-fluid">
            <h2 className="text-center">{currentPage.name}</h2>
            <PageContent>{renderPage()}</PageContent>
        </section>
    );
}

export default Page;