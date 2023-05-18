import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import Home from "./components/Home";
import Header from "./components/Header";
import ShadowProvider from "./context/Shadow";
const App = () => {
  return (
    <ShadowProvider>
      <div className="app">
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/home"
                element={
                  <>
                    <Header />
                    <Home />
                  </>
                }
              />
            </Routes>
          </Router>
        </Provider>
      </div>
    </ShadowProvider>
  );
};

export default App;
