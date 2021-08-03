import { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";

const SearchBar = (props) => {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);

  useEffect(() => {
    props.onSearch(term);
  }, [term]);

  return (
    <section>
      <form onSubmit={event => event.preventDefault()}>
        <input 
          placeholder="Search..."
          name="search"
          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
        >
        </input>
      </form>
    </section>
  )
}

export default SearchBar
