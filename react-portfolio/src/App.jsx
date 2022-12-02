import React, { useState } from "react";
import './App.css';
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import NavBar from "./components/NavBar/index.jsx";
import Page from "./components/Page/index.jsx";

function App() {
  const [pages] = useState ([
    {
      name: "Resume"
    },
    {
      name: "About Me"
    },
    {
      name: "Portfolio"
    },
    {
      name: "Contact"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <div className="App">
      <Header>
        <NavBar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></NavBar>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
