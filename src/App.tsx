import React from "react";
import "./App.css";
import { Header } from "./features/Header";
import { Main } from "./features/Main";
import { Footer } from "./features/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
