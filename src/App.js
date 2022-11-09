import "./App.css";
import React from "react";
import TopNavbar from "./Components/TopNavbar";
import MiddleNavbar from "./Components/MiddleNavbar";
import BottomNavbar from "./Components/BottomNavbar";
import Footer from "./Components/Footer";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  return (
    <>
      <TopNavbar />
      <MiddleNavbar />
      <BottomNavbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
