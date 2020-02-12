import React from "react";
import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Item_List from "./components/Item_List";

function App() {
  const url = "http://localhost:8000";
  const [data, setData] = useState({ data: [] });

  function newData(res) {
    setData({ data: res });
  }

  function fetchData() {
    fetch(url)
      .then(results => results.json())
      .then(res => newData(res));
  }



  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/items" component={Item_List} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
