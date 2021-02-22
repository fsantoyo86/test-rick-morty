import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Dropdown from "./components/Dropdown";
import ListCharacters from "./components/ListCharacters";
import ListEpisodes from "./components/ListEpisodes";
import ScrollToTop from './ScrollToTop';
import ListSingleChar from "./components/ListSingleChar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <div className="bg-emerald-500">
    <BrowserRouter>
    <ScrollToTop></ScrollToTop>
      <NavBar toggle={toggle}></NavBar>
      <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={ListCharacters} path="/characters" />
        <Route component={ListEpisodes} path="/episodes" />
        <Route component={ListSingleChar} path="/singleChar"></Route>
        <Redirect to={"/"} />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}
export default App;
