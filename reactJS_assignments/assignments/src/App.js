import React from "react";
import "./App.css";
import Footer from "../src/assignment_2/components/common/Footer";
import Header from "../src/assignment_2/components/common/Header";
import Routing from "./assignment_2/route/Routing";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/*  ********** Assignment 1 **********  */}
      {/* <Header />
      <Form />
      <Footer /> */}

      {/*  ********** Assignment 2 **********  */}
      <Router>
        <Header />
        <Routing />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
