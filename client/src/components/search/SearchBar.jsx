import React, { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Searchbar.scss'
const SearchBar = ({ results, onSearch }) => {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);

  useEffect(() => {
    onSearch(term);
  }, [term]);

  return (
  <Autocomplete
    id="combo-box-demo"
    className='search-bar'
    filterOptions={(options, state) => options}
    options={results}
    getOptionLabel={(result) => `${result.symbol} ${result.description}`}
    renderOption={(option) => (
      <div className='search-result'>
        <div>{option.symbol}</div><div>({option.description})</div>
      </div>
    )}
    style={{ width: 300 }}
    onInputChange={event => setValue(event.target.value)}
    renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
  />
);
}
export default SearchBar
