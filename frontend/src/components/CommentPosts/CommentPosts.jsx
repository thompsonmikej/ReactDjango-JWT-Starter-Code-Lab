import React, { useState } from 'react';


const CommentPosts = (props) => {

    const [userName, setUserName] = useState('');
    const [userCommentPosts, setUserCommentPosts] = useState('');

    return (
        <div>
            <p>{props.index + 1}</p>
            <h2>{props.entry.userName}</h2>
            <p>{props.entry.userCommentPosts}</p>
        </div>

    );
}
export default CommentPosts;

