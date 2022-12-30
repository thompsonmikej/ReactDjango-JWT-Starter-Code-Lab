// General Imports
import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./App.css";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage"
import RelatedVideos from "./components/RelatedVideos/RelatedVideos"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
// import Footer from "./components/Footer/Footer";
import UserCommentsComponent from "./components/UserCommentsComponent/UserCommentsComponent";
import SearchBar from "./components/SearchBar/SearchBar";
import CommentsList from "./components/CommentsList/CommentsList";
import CommentPosts from "./components/CommentPosts/CommentPosts";
import CommentsForm from "./components/CommentsForm/CommentsForm";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import LoggedInUser from "./utils/LoggedInUser";

function App() {
  let navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([])

  const fetchSearchData = async (searchTerm) => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyCiEUXiKBaGw-dlhtxY7ZSBTF-5lPjAUrw&part=snippet`);
          setSearchResults(response.data.items)
          navigate('/video')
    } catch (error) {
      console.log('App.js: Connection to external YouTube API error', error.response.data)
    }
  }

  return (
    <div>
      <div className="nav-search">
      <Navbar><SearchBar fetchSearchData={fetchSearchData} /></Navbar>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>

              <LoggedInUser>
                <UserCommentsComponent />
                {/* <HomePage /> */}
              </LoggedInUser>
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video" element={<VideoPage searchResults={searchResults} />} />  
        <Route path="/comment_posts" element={<CommentPosts searchResults={searchResults} />} />  
        <Route path="/comments_list" element={<PrivateRoute><CommentsForm /></PrivateRoute>} />  
        
        <Route path="/related" element={<RelatedVideos RelatedVideos={searchResults} />} /> 
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
