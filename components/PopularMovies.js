"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const PopularMovies = () => {
  const [popularMovies, setpopularMovies] = useState([])
  const getPopularMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1`
    );
    // console.log(data.results);
     setpopularMovies(data.results);
  };
  // console.log(PopularMovies);

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div className="trendingMovie">
      <h3 className="tm_heading">Popular Movies</h3>
      <div className="tm_cardholder">
        {popularMovies.map((elem) => (
          <Link
            href={`/movies/${elem.id}`}
            className="movie_link"
            key={elem.id}
          >
            <div className="tm_cardholder-card" key={elem.id}>
              <div className="tm_card-header" style={{ position: "relative" }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="tm_card_circle">
                  <p>{Math.trunc(elem.vote_average) * 10}%</p>
                </div>
              </div>
              <div className="card-body" style={{ marginTop: "10px" }}>
                <h5 className="card-title">{elem.original_title}</h5>
                <small className="date">{elem.release_date}</small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
