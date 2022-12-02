import React, { useState } from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Page from "./components/Page";

function App() {
  const [Pages] = useState ([
    {
      name = "Resume"
    },
    {
      name = "About Me"
    },
    {
      name = "Portfolio"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
