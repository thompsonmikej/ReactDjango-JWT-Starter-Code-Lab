import React, { useState } from 'react';
import PostList from './Components/PostList/PostList.jsx';
import PostForm from './Components/CreatePostForm/CreatePostForm.jsx'
import CustomButton from './Components/CustomButton/CustomButton.jsx';
import './App.css';


function RepliesList(entry) {
        const [replies, setReplies] = useState([{ userName: 'userName', userPost: 'userPost'}])
        let temporaryPosts = [...replies, entry]; 
        setReplies(temporaryPosts);
    
    return (
        <div className='container-fluid'>
            <div className='column'>
                <div className='col-md-6'>
                    <div className='border-box'>
                        <PostForm addNewPostProperty={addNewPost} /> 
                    </div>
                    <CustomButton />
                    <div className='border-box'>
                        <PostList parentList={replies} />

                    </div>
                </div>
            </div>
        </div>
    );
};
export default RepliesList;