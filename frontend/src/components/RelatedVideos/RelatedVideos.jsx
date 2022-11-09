import React from 'react';
import './RelatedVideos.css';

const RelatedVideos = (props) => {
    return (
        <><div className="video-container">
            {props.related.map((video) => {
                { console.log(`On RelatedVideos.jsx result, video inside map thumbnail:`, video.snippet.thumbnails.standard.url) }     
                return (
                    <><p><img src={video.snippet.thumbnails.standard.url} className="thumbnails"  alt="Video thumbnail."  /></p><p>{video.snippet.title}</p><p>Channel: {video.snippet.channelTitle}</p></>
                    

                )
            })}
        </div></>
    );
}
export default RelatedVideos;
