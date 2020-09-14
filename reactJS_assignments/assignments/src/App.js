import React from "react";
import "./App.css";
/* Imports for Assignment 1 */
// import Header from "./assignment_1/components/common/Header";
// import Footer from "./assignment_1/components/common/Footer";
// import Form from "./assignment_1/components/pages/Form";
// import "./assignment_1/assets/style.css";

/* Imports for Assignment 2 */
// import { BrowserRouter as Router } from "react-router-dom";
// import Header from "./assignment_2/components/common/Header";
// import Routing from "./assignment_2/route/Routing";
// import Footer from "./assignment_2/components/common/Footer";

/* Imports for Assignment 3 */
// import Footer from "../src/assignment_3/components/common/Footer";
// import Header from "../src/assignment_3/components/common/Header";
// import Routing from "./assignment_3/route/Routing";
// import { BrowserRouter as Router } from "react-router-dom";

/* Imports for Assignment 4 */
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./assignment_4/components/common/Header";
import Routing from "./assignment_4/route/Routing";
import Footer from "./assignment_4/components/common/Footer";

function App() {
  return (
    <div className="App">
      {/*  ********** Assignment 1 **********  */}
      {/* <Header />
      <Form />
      <Footer /> */}

      {/*  ********** Assignment 2 **********  */}
      {/* <Router>
        <Header />
        <Routing />
        <Footer />
      </Router> */}

      {/* ********** Assignment 3 ********** */}
      {/* <Router>
        <Header />
        <Routing />
        <Footer />
      </Router> */}

      {/*  ********** Assignment 4 **********  */}
      <Router>
        <Header />
        <Routing />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
