import axios from "./axios";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const Row = ({ title, fetchUrls, isLarge }) => {
  const base__url = "http://image.tmdb.org/t/p/original/";

  const [Movies, setMovies] = useState([]);
  const [trailerurl, setTrailerurl] = useState("");

  useEffect(() => {
    async function FetchData() {
      const req = await axios.get(fetchUrls);
      setMovies(req.data.results);
      return req;
    }
    FetchData();
  }, [fetchUrls]);

  const handleClick = (arr) => {
 
    if (trailerurl) {
      setTrailerurl('');
    } else {
      movieTrailer(arr?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerurl(urlParams.get("v"))
        })
        .catch((error) => {
         alert(error)
        });
    }
  };
  
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <>
      {/* title */}
      <div className="row">
        <h2>{title}</h2>
        <div className="row_poster_container">
          {/* container -> poster*/}
          {Movies.map((arr) => {
            return (
              <>
                <img
                  className={`row_poster ${isLarge && `large_poster`}`}
                  key={arr.id}
                  
                  onClick={() => handleClick(arr)}
                  src={` ${base__url}${
                    isLarge ? arr.poster_path : arr.backdrop_path
                  } `}
                  alt={arr.name}
                />
       
              </>
            );
          })}
        </div>
        {trailerurl  && <YouTube className="vedio" opts={opts} videoId={trailerurl} />}
      </div>
    </>
  );
};

export default Row;
