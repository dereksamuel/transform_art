/* eslint-disable no-undef */
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Footer } from "./Footer/index.jsx";
import { Header } from "./Header/index.jsx";
import "./index.css";
import { useUser } from "../hooks/useUser";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { EditApp } from "../pages/EditApp";
import { AboutUs } from "../pages/AboutUs";
import firebase from "../helpers/firebase.js";//FIXME: HIA
import { Picture } from "../pages/Picture";
import { useEdit } from "../hooks/useEdit";
import { PictureById } from "./PictureById";
import { Cart } from "../pages/Cart.jsx";

export default function App() {
  const { loading, currentUser } = useUser();
  const rememberMe = useSelector((state) => state.login.rememberMe);
  const editApp = useEdit();

  useEffect(() => {
    verifyRememberMe();
  }, []);

  async function verifyRememberMe() {
    if (!JSON.parse(rememberMe)) {
      await firebase.auth().signOut();//FIXME: Arregla the error of clean useEffect
    }
  }

  if (loading)
    return <p>Loading</p>

  return (
    <div id="live">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <Home editApp={editApp} />} />
          <Route exact path="/about_us" component={() => <AboutUs editApp={editApp} />} />
          <Route exact path="/login" component={() => <Login currentUser={currentUser} />} />
          <Route exact path="/pictures" component={() => <Picture editApp={editApp} />} />
          <Route exact path="/picture/:id" component={() => <PictureById editApp={editApp} />} />
          <Route exact path="/cart" component={() => <Cart />} />
          {
            currentUser ? (
              <Route exact path="/edit_app" component={() => <EditApp editApp={editApp} />} />
            ) : (
              <Redirect exact to="/login" />
            )
          }
        </Switch>
        <Footer currentUser={currentUser} />
      </Router>
    </div>
  );
}
