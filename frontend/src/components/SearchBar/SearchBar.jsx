import React, { useState } from 'react';
// import './SearchBar.css';

const SearchBar = (props) => {
    // hooks
    const [searchTerm, setSearchTerm ] = useState('Search for video');
  
    function handleSubmit(postEvent) {
        postEvent.preventDefault();
       
        console.log(searchTerm);
        props.fetchSearchData(searchTerm)
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group top-label'>
                <label>Search</label>
                <input type='text' className='form-control' onChange={(event) => setSearchTerm(event.target.value)} value={searchTerm} />
            </div>
            <div>
                <button type='submit' className='btn'>Search</button>
            </div>
        </form>
    );
}

export default SearchBar;
