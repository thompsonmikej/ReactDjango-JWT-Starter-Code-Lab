import React from 'react';

const RelatedVideos = (props) => {

    //very first step, console log your variables from props
    //first step, just display video title in a p tag
    //next step, transition to img tags with src=thumbnail url
    //map through props.related and display a thumbnail for each

    return (
        <>
            {props.related.map((video) => {
                return (
                    console.log('Related Videos: ', video.snippet.channelTitle, video.snippet.title, video.snippet.thumbnails)
                    // <p>{video.snippet.title}</p>
                    // <p>{video.snippet.description}</p>
                )
            //logic for displaying list of related videos
                //links to video player, pass through the onClicked video
            }
            )}
        </>
    )
}



export default RelatedVideos;