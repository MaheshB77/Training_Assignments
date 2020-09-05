import React from "react";
// import logo from './logo.svg';
import "./App.css";
import "../src/style/style.css";
import Header from "../src/components/common/Header";
import Footer from "../src/components/common/Footer";
import Form from "./components/pages/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
