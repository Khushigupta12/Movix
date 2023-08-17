"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const TrendingMovies = () => {
  const [trendingMovies, settrendingMovies] = useState([])
  const getTrendingMovies = async () => {
    try {
      const  { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1`
      );
       console.log(data.results);
      settrendingMovies(data.results);
      // console.log(moviestrend);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getTrendingMovies();
  }, [])
  return (
    <>
      <div className="trendingMovie tre">
        <h3 className="tm_heading">Trending Movies</h3>
        <div className="tm_cardholder">
          {trendingMovies.map((elem) => (
            <Link
              href={`/movies/${elem.id}`}
              className="movie_link"
              key={elem.id}
            >
              <div className="tm_cardholder-card" key={elem.id}>
                <div
                  className="tm_card-header"
                  style={{ position: "relative" }}
                >
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
    </>
  );
}

export default TrendingMovies
// {/* {trendingMovies.map((elem) => {
//     return (
//       <div key={elem.id}>
//         <p>{elem.original_title}</p>
//         {/* <p>{image.alt_description}</p> */}
//       </div>
//     )}
//     )}
//     { {trendingMovies} }
//       { {trendingMovies.map((elem) => {
//         <div key={elem.id}>
//           <h1>{elem.original_title}</h1>
//         </div>;
//       })} } */}
      