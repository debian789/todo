import React from 'react';

import './TodoSearch.css'

function TodoSearch() {
    return (
    <React.Fragment>
        <input type="text" className='input-search' placeholder='Search...'/>
        <label>Q</label>

    </React.Fragment>
    )
}

export {TodoSearch};