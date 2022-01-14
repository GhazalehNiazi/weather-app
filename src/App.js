import "./App.css";
import React from "react";
import MainPage from "./components/Pages/MainPage";
import GlobalState from "./store/GlobalState";
function App() {
  return (
    <GlobalState>
      <React.Fragment>
        <MainPage />
      </React.Fragment>
    </GlobalState>
  );
}

export default App;
