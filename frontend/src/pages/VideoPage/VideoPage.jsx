import React from 'react';


const VideoPage = (props) => {
// segment of the page (container) with video player
// Play a single video here
    //[0].id.videoId
    
    let videoUrl = `http://www.youtube.com/embed/${props.searchResults[0].id.videoId}`;
    
    //response.data.items[0].id.videoID
    
    return (
        <><h1>Video Page</h1>
            {console.log(videoUrl)}
            {console.log('videoPage searchResults value:', props.searchResults)}
                    <iframe id="ytplayer" type="text/html" width="640" height="360" src={videoUrl}autoPlay="0" frameBorder="0" ></iframe>
            {/* https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0&origin=http://example.comautoplay=0&controls=1&showinfo=1 */}
        
        </>
     
    )
}

export default VideoPage;