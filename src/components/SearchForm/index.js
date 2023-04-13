import React, { useState } from 'react';

function SearchForm( { onSubmit } ) {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = evt => {
        evt.preventDefault();
        //Add a route
        onSubmit({ keyword })
    }

    const handleChange = event => {
        setKeyword(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <button className="search-btn">Search</button>
            <input onChange={handleChange} type="text" value={keyword} placeholder="Search a Gif"/>
        </form>
    )
}

export default React.memo(SearchForm)