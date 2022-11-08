import React from 'react';

const VideoPlayer = (props) => {
// import iframe here; embed this page onto videoPage
        return (
            <><><h1>{props.videoSnippet.snippet.title}</h1>
                <p>{props.videoSnippet.snippet.description}</p>

                {console.log('VideoPlayer snippet result: ', props.videoSnippet.snippet.description)}
             
                <iframe id="ytplayer" type="text/html" width="640" height="360" src={props.videoUrl} autoPlay="0" frameBorder="0"></iframe>
            </></>
        )
    }

export default VideoPlayer;