import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    // hooks
    const [videoSearch, setVideoSearch] = useState('Search for video');
  
    function handleSubmit(postEvent) {
        postEvent.preventDefault();
       
        console.log(newSearch);
        props.newSearchProperty(newSearch)
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group top-label'>
                <label>Search</label>
                <input type='text' className='form-control' onChange={(event) => setVideoSearch(event.target.value)} value={videoSearch} />
            </div>
            <div>
                <button type='submit' className='btn'>Submit</button>
            </div>
        </form>
    );
}

export default SearchBar;
