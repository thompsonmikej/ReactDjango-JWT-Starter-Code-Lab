// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from 'axios';
import {useState} from 'react'

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import VideoPage from "./pages/VideoPage/VideoPage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar"

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  const [searchResults, setSearchResults] = useState([])
  const fetchSearchData = async (searchTerm) => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyCiEUXiKBaGw-dlhtxY7ZSBTF-5lPjAUrw`);
      console.log('App.js: Connection to external YouTube API success', response.data.items);
      setSearchResults(response.data.items)

    } catch (error) {
      console.log('App.js: Connection to external YouTube API error', error.response.data)
    }
  }

  return (
    <div>
      <Navbar />
      <SearchBar fetchSearchData={fetchSearchData} />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/video" element={<VideoPage />} /> 
        {/* see Adding a Feature video for sub-features of Search and Video pages */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
