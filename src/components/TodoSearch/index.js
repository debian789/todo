import React from "react";

import "./TodoSearch.css";

function TodoSearch( { searchValue, setSearchValue } ) {
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
