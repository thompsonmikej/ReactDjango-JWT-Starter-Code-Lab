import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState(''); 
  
    function handleSubmit(postEvent) {
        postEvent.preventDefault();
        props.fetchSearchData(searchTerm)    }

    return (
        <form onSubmit={handleSubmit} className='form-grid center'>
            <div className='form-group'>
                <label>Name your video, artist, channel, or creator</label>
                <input type='text' className='form-control center' onChange={(event) => setSearchTerm(event.target.value)} value={searchTerm} />
            </div>
            <div>
                    <button type='submit' className='btn'>Search</button>
            </div>
        </form>
    );
}

export default SearchBar;
