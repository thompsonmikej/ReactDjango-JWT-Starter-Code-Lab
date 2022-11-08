import React, { useState } from 'react';
import './SearchBar';

// user inputs search query; see Video 1, Day 50
// sibling to VideoPage. user enters search value that triggers parent (App function). 

const SearchBar = (props) => {
    // hooks
    //the initial value for searchTerm, setSearchTerm re-sets it when user types a value into the search field below
    const [searchTerm, setSearchTerm] = useState(''); //Enter a video search term
  
    function handleSubmit(postEvent) {
        postEvent.preventDefault();
        //    console.log('SearchBar handleSubmit variable: searchTerm:', searchTerm);
        props.fetchSearchData(searchTerm) //searchTerm contains the array of terms from within the function
//    this is the event handler that sets or re-sets the searchTerm when the Search button is clicked
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group top-label'>
                <label>Name your video, artist, channel, or creator</label>
                <input type='text' className='form-control' onChange={(event) => setSearchTerm(event.target.value)} value={searchTerm} />
                {/* this is the child element that passes the value to the parent via fetchSearchData function */}
            </div>
            <div>
                    <button type='submit' className='btn'>Search</button>
            </div>
        </form>
    );
}

export default SearchBar;
