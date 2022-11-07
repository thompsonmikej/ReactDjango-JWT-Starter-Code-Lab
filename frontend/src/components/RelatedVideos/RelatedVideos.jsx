// Search results appear here
// setSearchResults contains the 5 YT results
// pass the results from App to here


const RelatedVideos = (props) => {

    // function displayItems(props) {
    //     let displayItems = props.searchResults.map(props.items)
    //     console.log('VideoPage.js: displayItems', displayItems)
    // }
    
//Need an array to capture the YT API success. The returns of 5 videos from searchTerm.

    function searchByKeyword(props) {
        let results = props.searchResults('id,snippet', { q: props.searchResults, maxResults: 6 });

        for (var i in results.items) {
            var item = results.items[i];
            console.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
        }
    }

    
    return (
        <><div>RelatedVideos</div><div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Video Title</th>
                        <th>Artist</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {props.parentEntries.map((entry, index) => { */}
                    {props.setSearchResults.map((items, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{items.title}</td>
                                <td>{items.artist}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div></>

    );
}

export default RelatedVideos;