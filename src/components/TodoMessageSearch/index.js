import React from 'react'
import './TodoMessageSearch.css'

function TodoMessageSearch({searchText}) {
    return (
        <div className='container-message-search'>
            <h1>No existen resultados para: <span>{searchText}</span> </h1>
        </div>
    )
}

export {TodoMessageSearch}