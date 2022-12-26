import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import axios from 'axios';
import './VideoPage.css'

const VideoPage = (props) => {
    let videoID = props.searchResults[0].id.videoId
    let videoUrl = `http://www.youtube.com/embed/${videoID}`;
    let videoSnippet = props.searchResults[0]
    

    const [related, setRelated] = useState([])
    
    useEffect(() => {
        getRelatedVideos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props.searchResults])

    async function getRelatedVideos () {
          try {
            console.log('videoID', videoID)
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoID}&type=video&key=AIzaSyCiEUXiKBaGw-dlhtxY7ZSBTF-5lPjAUrw&part=snippet`);
            setRelated(response.data.items);
            
        }
        catch(err) {
            console.log(err)
        }
    }
    
    return (
        <><div className='page-container'>
            <div className="video-display iframe-video"><VideoPlayer videoUrl={videoUrl} videoSnippet={videoSnippet} searchResults={props.searchResults} /></div>
            <Link to="/comments_list">View Comments</Link></div>
            <div>
                <h2>Related Videos</h2>
                <div className='page-column'><RelatedVideos related={related} /><hr /></div>
            </div>
            {console.log('VideoPage.jsx related variable', related)}
        </>
        
    )
}

export default VideoPage;