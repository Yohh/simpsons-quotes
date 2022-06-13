import React from "react";
import axios from "axios";
import SearchQuote from "./components/SearchQuote";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [simpsonQuote, setSimpsonQuote] = React.useState("");

  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        setSimpsonQuote(data[0]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <button type="submit" onClick={getQuote}>
        search
      </button>
      <SearchQuote {...simpsonQuote} />
    </div>
  );
}

export default App;
