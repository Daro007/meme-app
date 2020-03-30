import React from "react";
import "./App.css";
import MemeGenerator from "./MemeGenerator";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MemeGenerator></MemeGenerator>
      <Footer></Footer>
    </div>
  );
}

export default App;
