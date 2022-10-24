import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsCollection from "./components/NewsCollection";
import Category from "./activity/Category";
import Country from "./activity/Country";
import ContactUs from "./activity/ContactUs";
import SearchNews from "./activity/SearchNews";
// import { Switch, Route } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* {fetchNewsFromApi()} */}
        <Navbar/>
        {/* <NewsCollection/> */}
        {/* <Category /> */}

        <Switch>
          <Route path={'/search/q='}>
            <SearchNews/>
          </Route>
          <Route path="/category">
            <Category/>
          </Route>
          <Route path="/country">
            <Country/>
          </Route>
          <Route path="/contactUs">
            <ContactUs/>
          </Route>
          <Route path="/">
            <NewsCollection/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
