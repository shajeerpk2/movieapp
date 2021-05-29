import React from "react";
import "./MovieDetails.css";

function MovieDetails(props) {
  const movie = props.location.state.detail;
  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="movieDetails">
      <div className="DetailDiv">
        <h2 className="RowTitle">
          {/* i notice that some movies give u a title a name or an orginal name , api information isnt consistent   */}
          {movie?.name || movie?.title || movie?.orginal_name}
        </h2>
        <h4 className="RowTitleOverview">{movie.overview}</h4>
      </div>
      <div className="ImageDiv">
        <img
          className="DetailImage" //use && if theres no else or : otherwise use ?
          src={`${base_url}${movie.poster_path}`}
          alt={movie.name}
        ></img>
      </div>
    </div>
  );
}

export default MovieDetails;
