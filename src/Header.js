import React from "react";
import axios from "./axios";
import request from "./request";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
// const base__url = "http://image.tmdb.org/t/p/original/";
const Header = () => {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const req = await axios.get(request.fetchNetflixoriginals);
      setMovies(req.data.results[
Math.floor(Math.random()*req.data.results.length-1)
      ]);
    
      
      return req;
    }
    fetchdata();
  }, []);
  // function truncateString(str, num) {
  //   if (str.length > num) {
  //     return str.slice(0, num) + "...";
  //   } else {
  //     return str;
  //   }
  // }
  return (
    <>
      <div
        className="header"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
            http://image.tmdb.org/t/p/original/${Movies?.poster_path}
          )`,
          backgroundPosition: "center center",
          
        }}
      >
        <div className="fadeheadertop">
        </div>
          <Navbar />

        <div className="banner_container">
          <h1>{Movies?.name || Movies?.title || Movies?.orignal_name}</h1>
          <button className="banner_btn">Play Now</button>
          <button className="banner_btn">My List</button>
          <p className="banner_description">{Movies.overview}</p>
        </div>
        <div className="fadeheader"></div>
        <br />
      </div>
    </>
  );
  
};

export default Header;
