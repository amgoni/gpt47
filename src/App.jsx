import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  WhatGPT3,
  Features,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

//BEM >>> Block Element Modifier CSS naming convention is being used.

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
