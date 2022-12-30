import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CommentPosts from "../../components/CommentPosts/CommentPosts";

// lists all existing comments
// allows user to add a comment into the list

const CommentsList = (props) => {

    const [user, token] = useAuth();
    const [comments, setComments] = useState([]);
    const [applyComment, setApplyComment] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchComments = async () => {
            try {
                let response = await axios.get(`http://127.0.0.1:8000/api/comments/`,
                    {
                        headers: {
                            Authorization: "Bearer " + token,
                        },
                    });
                setComments(response.data);
            } catch (error) {
                console.log('Error in comments list', error);
            }
        };
        fetchComments();
    }, [token]);

    const selectComment = async (commentId) => {
        let commentObject = {
            "user_id": user.id,
            "comment_id": commentId,
        }
        try {
            let response = await axios.post(`http://127.0.0.1:8000/api/comments/new_comment/`,
                commentObject,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
            console.log('enroll', commentObject)
            setApplyComment(response.data.items)
            navigate(`/comments_list/`)
        } catch (error) {
            console.log('error in enroll', error.response.data)
        }
    };

    return (
        <div>
            {props.parentList.map((entry, index) => {
                return (
                    <React.Fragment>
                        <div key={entry.id}>
                            {/* <span className="schedule-button">
                                <button type='submit' onClick={() => selectComment(entry.id)}>Enroll</button>
                            </span> */}
                        </div>
                            <div>
                                <p>{entry.index}</p>
                                <p className='userName'>{entry.userName}</p>
                                <p>{entry.userComment}</p>
                            </div>
                            <span>
                                <i className=" hover glyphicon glyphicon-thumbs-up"> </i>
                                <i className=" hover glyphicon glyphicon-thumbs-down"> </i>
                            </span>
                        </React.Fragment>
                )
            })}
        </div>
    )

}
            
export default CommentsList;

