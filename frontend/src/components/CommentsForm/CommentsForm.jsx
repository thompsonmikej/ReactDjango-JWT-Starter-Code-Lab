import React, { useState } from 'react';
// import CustomButton from '../CustomButton/CustomButton';
// import './CommentsForm.css';

const CommentsForm = (props) => {
    const [userName, setUserName] = useState('Username here');
    const [userComment, setUserComment] = useState('Write here');

    function handleSubmit(postComment) {
        postComment.preventDefault();
        let newComment = {
            userName: userName,
            userComment: userComment
        } 
        console.log(newComment);
        props.addNewComment(newComment)
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group top-label'>
                <label>Name</label>
                <input type='text' className='form-control' onChange={(event) => setUserName(event.target.value)} value={userName} />
            </div>
            <div className='form-group'>
                <label>Comment</label>
                <input type='text' className='form-control form-post' onChange={(event) => setUserComment(event.target.value)} value={userComment} />
            </div>
            <div>
                <button type='submit' className='create btn btn-primary'>Create
                    {/* <CustomButton /> */}
                </button>
            </div>
        </form>
    );
}

export default CommentsForm;
