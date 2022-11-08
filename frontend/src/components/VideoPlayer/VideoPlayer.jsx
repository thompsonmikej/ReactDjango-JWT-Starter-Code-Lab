import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const VideoPlayer = (props) => {
// import iframe here 
//embed this page onto videoPage

        // let videoUrl = `http://www.youtube.com/embed/${props.searchResults[0].id.videoId}`;
        // let videoSnippet = props.searchResults[0]
        let navigate = useNavigate();

        return (
            <><><h1>{props.videoSnippet.snippet.title}</h1>
                <p>{props.videoSnippet.snippet.description}</p>

                {console.log('This Snippet result: ', props.videoSnippet.snippet.description)}
             
                <iframe id="ytplayer" type="text/html" width="640" height="360" src={props.videoUrl} autoPlay="0" frameBorder="0"></iframe>
                <Link to="/related">Related videos</Link>
            </></>
        )
    }

export default VideoPlayer;