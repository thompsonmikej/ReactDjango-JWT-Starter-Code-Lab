import React from 'react';

const RelatedVideos = (props) => {
    return (
        <>
            {props.related.map((video) => {
                { console.log(`On RelatedVideos result, video inside map:`, video) }     
                return (
                    <p>{video.snippet.title}</p>


                )
            })}
        </>
    );
}
export default RelatedVideos;