// import React, { useState, useEffect } from "react";
import "./App.scss";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "swiper/swiper.min.css";

// import StartAnimation from "./components/start-animation/StartAnimation";
// import JoinHomePage from "./pages/JointHomePage";

import Footer from "./common/footer/Footer";
import Header from "./common/header/Header";
import RouteConfig from "./config/RouteConfig";

function App() {
  //   const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     delay();
  //   }, []);

  //   function delay() {
  //     setTimeout(() => {
  //       console.log("delay on");
  //       setIsLoading(false);
  //     }, 4000);
  //   }
  //   return <div>{isLoading ? <StartAnimation /> : <JoinHomePage />}</div>;
  return (
    <>
      <Header />
      <RouteConfig />
      <Footer />
    </>
  );
}

export default App;
