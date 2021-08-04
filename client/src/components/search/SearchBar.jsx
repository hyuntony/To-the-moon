import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import useDebounce from "../../hooks/useDebounce";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Searchbar.scss'
const SearchBar = ({ results, onSearch }) => {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);

  let history = useHistory();

  function handleClick(link) {
    history.push(`/details/${link}`);
    console.log(`/details/${link}`)
  }

  useEffect(() => {
    onSearch(term);
  }, [term]);

  return (
  
  <Autocomplete
    id="combo-box-demo"
    className='search-bar'
    filterOptions={(options, state) => options}
    options={results}
    getOptionLabel={(result) => `${result.symbol}`}
    renderOption={(option) => (
      <div className='search-result'>
        <div>{option.symbol}</div><div>({option.description})</div>
      </div>
    )}
    onChange={(event, value) => handleClick(value.symbol)}
    style={{ width: 300, backgroundColor: "white" }}
    onInputChange={event => setValue(event.target.value)}
    renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
  />
 
);
}
export default SearchBar
