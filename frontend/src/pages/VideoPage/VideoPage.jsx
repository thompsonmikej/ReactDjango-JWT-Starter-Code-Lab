import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import CommentsList from '../../components/CommentsList/CommentsList';
import CommentsForm from '../../components/CommentsForm/CommentsForm';
import axios from 'axios';
import './VideoPage.css'

const VideoPage = (props) => {
    let videoID = props.searchResults[0].id.videoId
    let videoUrl = `http://www.youtube.com/embed/${videoID}`;
    let videoSnippet = props.searchResults[0]
        
    const [related, setRelated] = useState([])
    
    useEffect(() => {
        getRelatedVideos();
        }, [props.searchResults])

    async function getRelatedVideos () {
          try {
            console.log('videoID', videoID)
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoID}&type=video&key=AIzaSyCiEUXiKBaGw-dlhtxY7ZSBTF-5lPjAUrw&part=snippet`);
            console.log('response, related ', response)
            setRelated(response.data.items);
          
        }
        catch(err) {
            console.log(err)
        }
    }
    
    return (
        <><div className='page-container'>
            <div className="iframe-video video-display"><VideoPlayer videoUrl={videoUrl} videoSnippet={videoSnippet} searchResults={props.searchResults} /></div>
            <div>
                <h2>Related</h2>
            <div><RelatedVideos related={related} /><hr /></div>
            </div>
            {console.log('VideoPage.jsx related variable', related)}
            <div><CommentsForm /></div>
        </div>
        </>
        
    )
}

export default VideoPage;