import React from 'react';


const VideoPage = (props) => {
// segment of the page (container) with video player
// Play a single video here
// videoPage pulls YouTube searchResult
    
    let videoUrl = `http://www.youtube.com/embed/${props.searchResults[0].id.videoId}`;
    let videoSnippet = props.searchResults[0]
    
    return (
        <><h1>{videoSnippet.snippet.title }</h1>
        <p>{videoSnippet.snippet.description }</p>
                          
            {console.log('Snippet result: ', videoSnippet.snippet.description)}
            {console.log('videoPage searchResults value:', props.searchResults)}
                    <iframe id="ytplayer" type="text/html" width="640" height="360" src={videoUrl}autoPlay="0" frameBorder="0" ></iframe>
        </>
    )
}

export default VideoPage;