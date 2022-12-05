import React, { useState } from "react";
import './App.css';
// import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import NavBar from "./components/NavBar/index.jsx";
import Page from "./components/Page/index.jsx";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [pages] = useState ([
    {
      name: "About Me"
    },
    {
      name: "Portfolio"
    },
    {
      name: "Contact"
    },
    {
      name: "Resume"
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <div className="App">
      <NavBar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
      ></NavBar>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
