import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';

const VideoPage = (props) => {
// segment of the page (container) with video player; will contain links for related videos
// videoPage pulls YouTube searchResults
    
    let videoUrl = `http://www.youtube.com/embed/${props.searchResults[0].id.videoId}`;
    let videoSnippet = props.searchResults[0]

    const [related, setRelated] = useState([])
    
    useEffect(() => {
        //API call #2 to get related videos, include snippet
        //save them to state
    }, [props.searchResults])

    return (
        <><VideoPlayer videoUrl={videoUrl} videoSnippet={videoSnippet} searchResults={props.searchResults} />
        <RelatedVideos related={related} />
        </>
        
    )
}

export default VideoPage;