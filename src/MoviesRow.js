import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./MoviesRow.css";
import StarRatings from "react-star-ratings";
import { useHistory } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";
function MoviesRow(HeaderData) {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      let url =
        "/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
      console.log("urlll", HeaderData);
      if (HeaderData.HeaderData != "") {
        console.log("inside");
        url =
          "/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='" +
          HeaderData.HeaderData +
          "'";
      }
      if (HeaderData.filtercateg != 0 && HeaderData.filtercateg != "") {
        url = url + "&with_genres=" + HeaderData.filtercateg;
      }
      const request = await axios.get(url);
      setMovies(request.data.results);
      console.log("rrr", request);
    }
    fetchData();
  }, [HeaderData]);

  const HandleImageClick = (movies) => {
    //HeaderData.roots("/Details");
    history.push({
      pathname: `/Details`,
      state: { detail: movies },
    });

    console.log("categ", movies);
  };

  return (
    <div className="row">
      {movies.map((movie) => (
        <div
          onClick={() => HandleImageClick(movie)}
          key={movie.id}
          className="rowItem"
        >
          <img
            className="rowImage" //use && if theres no else or : otherwise use ?
            src={`${base_url}${movie.backdrop_path}`}
            alt={movie.name}
          ></img>
          <h4 className="RowTitle">
            {/* i notice that some movies give u a title a name or an orginal name , api information isnt consistent   */}
            {movie?.name || movie?.title || movie?.orginal_name}
          </h4>
          <StarRatings
            rating={movie.vote_average / 2}
            starDimension="15px"
            starSpacing="5px"
          />
        </div>
        // <h4 className="RowTitle">
        //     {/* i notice that some movies give u a title a name or an orginal name , api information isnt consistent   */}
        //     {movie?.name || movie?.title || movie?.orginal_name}
        // </h4>
      ))}
    </div>
  );
}

export default MoviesRow;
