import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import axios from "axios";

const UserCommentsComponent = () => {
  const [user, token] = useAuth();
  return (
    <><div className="centered">
      <br /><h1>Welcome to Your Employee Portal, <br/>{user.first_name} {user.last_name}</h1>
      <div><Link to="/video_page" className="register"> Directory of Current Students </Link></div><br />
      <div>
        <h2>USER COMMENTS</h2>
        <Link to="/add_courses" className="register">Add A Course</Link>
      </div>
      <div>
        <Link to="/course_catalog" className="register">View Catalog/Delete A Course</Link>
      </div>
      <br />
      <div>
        <h2>NEXT GRADUATING CLASS</h2>
        <Link to="/candidates" className="register"> Candidates for Graduation </Link></div>

    </div></>

  );
};
export default UserCommentsComponent;
