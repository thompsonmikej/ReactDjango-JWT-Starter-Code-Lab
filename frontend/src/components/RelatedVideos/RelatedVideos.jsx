// Search results appear here
// setSearchResults contains the 5 YT results
// pass the results from App to here


const RelatedVideos = (props) => {

//Need an array to capture the YT API success. The returns of 5 videos  

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
                                <td>{items.weight}</td>
                                <td>{items.date}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div></>

    );
}

export default RelatedVideos;