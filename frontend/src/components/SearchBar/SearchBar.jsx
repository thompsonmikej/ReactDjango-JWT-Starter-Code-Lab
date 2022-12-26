import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState(''); 
  
    function handleSubmit(postEvent) {
        postEvent.preventDefault();
        props.fetchSearchData(searchTerm)    }

    return (
        <form onSubmit={handleSubmit} className='form-grid center'>
            <div className="search-block"><div className='form-group'>
                <label> _</label>
                <input type='text' className='form-control-local' onChange={(event) => setSearchTerm(event.target.value)} value={searchTerm} />
            </div>
            <div>
                 <button type='submit' className="search-btn" >Search</button>
            </div></div>
        </form>
    );
}

export default SearchBar;
