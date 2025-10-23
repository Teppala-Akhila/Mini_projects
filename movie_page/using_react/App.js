import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

var reactElement = document.getElementById("main-container");
var reactRoot = createRoot(reactElement);

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer/>
    </>

  );
};
reactRoot.render(<App />);