import { useState, useEffect, Fragment } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import "./Searchbar.scss";
import "./Search.scss";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`/finn/searchbar/${term}`)
      .then((data) => {
        setResults(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [term]);

  return (
    <div className="search">
      <div className="fa fa-search"></div>
      <SearchBar onSearch={(term) => setTerm(term)} results={results} />
      <div className="fa fa-times"></div>
    </div>
  );
};

export default Search;
