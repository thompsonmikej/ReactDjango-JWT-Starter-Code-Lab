// Within the PostList component, create the feed where all your posts will be displayed in your app.All posts should be passed into this component using props.Then, utilize the “map” higher order array method to map each post to its own Post component.
import React from "react";
import Post from "../Post/Post";
import './LikesDislikes.css'


const LikesDislikes = (props) => {
    return (
        <div>
            {props.parentList.map((entry, index) => {
                return (
                    <React.Fragment>
                        <p>{entry.index}</p>
                        <p className='userName'>{entry.userName}</p>
                        <p>{entry.userPost}</p>
                        <span>
                            
                            <i className=" hover glyphicon glyphicon-thumbs-down"> </i>
                        </span>
                        {/* {isServerError ? (
                            <i className=" hover glyphicon glyphicon-thumbs-up"> </i>
                        ) : <i className=" hover glyphicon glyphicon-thumbs-down"> </i>} */}
                        <hr />
                    </React.Fragment>
                )
            })}
        </div>
    )

}
export default LikesDislikes;