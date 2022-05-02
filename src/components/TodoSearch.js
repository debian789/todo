import React from 'react';

import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {

   // const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        // console.log(event.target.value)
        setSearchValue(event.target.value)

    }

    return (
    <div className="container-search">
        <input
        onChange={onSearchValueChange}
        value={searchValue}
         type="text" className='input-search' placeholder='Search...'/>
        <button>Q{searchValue}</button>
    </div>
    )
}

export {TodoSearch};