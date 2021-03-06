import React from "react";
import { TodoContext } from "../../TodoContext";

import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="container-search">
      <input
        onChange={onSearchValueChange}
        value={searchValue}
        type="text"
        className="input-search"
        placeholder="Search..."
      />
      <button>Q</button>
    </div>
  );
}

export { TodoSearch };
