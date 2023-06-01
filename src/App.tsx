import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import Home from "./components/Home";
import Header from "./components/Header";
import ShadowProvider from "./context/Shadow";
import Sign from "./components/Sign";
import Join from "./components/Join";
import Comment from "./components/Comment";
import ProtectedRoute from "./ProtectedRoute";
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
                  <ProtectedRoute>
                    <Header />
                    <Home />
                  </ProtectedRoute>
                  </>
                }
              />
              <Route path="/sign" element={<Sign/>}/>
              <Route path="/join" element={<Join/>}/>
              <Route path="/comment" element={<Comment/>}/>
            </Routes>
          </Router>
        </Provider>
      </div>
    </ShadowProvider>
  );
};

export default App;
