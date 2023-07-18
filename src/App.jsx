import { ToastContainer, toast } from "react-toastify";
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Header from "./components/Header/Header";
import "react-toastify/dist/ReactToastify.css";
import Main from "./components/Main/Main";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ToastContainer />
    </div>
  );
}

export default App;
