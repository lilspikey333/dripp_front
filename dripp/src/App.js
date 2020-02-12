import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Item_List from "./components/Item_List";

function App() {
  const url = "http://localhost:8000/items/";
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res);
      }, [])
      .catch(error => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/items"
          render={props => <Item_List {...props} items={data} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
