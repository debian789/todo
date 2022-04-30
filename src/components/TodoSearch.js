import React from 'react';

import './TodoSearch.css'

function TodoSearch() {
    return (
    <div className="container-search">
        <input type="text" className='input-search' placeholder='Search...'/>
        <button>Q</button>

    </div>
    )
}

export {TodoSearch};