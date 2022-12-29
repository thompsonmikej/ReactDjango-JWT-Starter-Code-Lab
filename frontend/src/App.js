// General Imports
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import axios from 'axios';
import {useState} from 'react'

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
// import SearchPage from "./pages/SearchPage/SearchPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar"
import RelatedVideos from "./components/RelatedVideos/RelatedVideos";
import CommentPosts from "./components/CommentPosts/CommentPosts";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import CommentsList from "./components/CommentsList/CommentsList";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

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
              {/* <HomePage /> */}
              <CommentsForm />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video" element={<VideoPage searchResults={searchResults} />} />  
        <Route path="/comment_posts" element={<CommentPosts searchResults={searchResults} />} />  
        <Route path="/comments_form" element={<CommentsForm searchResults={searchResults} />} />  
        {/* <Route path="/comments_list" element={<CommentsList searchResults={searchResults} />} />   */}
        <Route path="/comments_list" element={<PrivateRoute><CommentsForm /></PrivateRoute>} />  
        
        <Route path="/related" element={<RelatedVideos RelatedVideos={searchResults} />} /> 
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
