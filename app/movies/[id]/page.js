"use client"
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "@/components/Navbar";
import axios from "axios";
const page = (props) => {

  const [singleMovie, setsingleMovie] = useState(null);
  const { params } = props;
  //  console.log(params);
   const {id } = params;
  //  console.log(id);
  const GetSingleMovie = async () => {
    if (id) {
      let json = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US`
      );
       console.log(json.data);
      setsingleMovie(json.data);
    }
  };

  useEffect(() => {
    GetSingleMovie();
  }, [params]);
  // console.log(singleMovie);

  if (singleMovie) {
    var ProgressBarStyle = {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      background: `radial-gradient(closest-side, white 79%, transparent 80% 100%),
      conic-gradient(hotpink ${Math.round(
        singleMovie.vote_average * 10
      )}% , pink 0)`,
      position: "relative",
    };
  }

  return (
    <div>
      <Navbar />
      {singleMovie ? (
        <div className="id_singleMovieHolder">
          <div className="left-img-card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`}
              className="id_img-cardholder"
            ></img>
          </div>
          <div
            className="right-content-card"
            style={{
              backgroundImage:
                `url(https://image.tmdb.org/t/p/w500/` +
                `${singleMovie.backdrop_path}` +
                `)`,
            }}
          >
            <div className="overlay2 id_overlay">
              <h1
                className="d-flex"
                style={{
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom: "-2%",
                }}
              >
                {singleMovie.original_title}{" "}
                <span>
                  <p style={{ fontWeight: "200" }}>
                    ({new Date(singleMovie.release_date).getFullYear()})
                  </p>
                </span>
              </h1>
              <div className="id_short-info">
                <p>
                  {new Date(singleMovie.release_date).getDate()}/
                  {new Date(singleMovie.release_date).getMonth() + 1}/
                  {new Date(singleMovie.release_date).getFullYear()}
                </p>
                <ul className="id_genres-list">
                  {singleMovie.genres.map((elem, index) => (
                    <li key={elem.id}>
                      {elem.name}
                      {index !== singleMovie.genres.length - 1 ? " ," : ""}
                    </li>
                  ))}
                </ul>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    {Math.floor(singleMovie.runtime / 60)}hr{" "}
                    {Math.round(
                      (singleMovie.runtime / 60 -
                        Math.floor(singleMovie.runtime / 60)) *
                        60
                    )}
                    min
                  </li>
                </ul>
              </div>
              <div className="id_prg-info">
                <div className="progress-bar" style={ProgressBarStyle}>
                  <progress
                    value={Math.round(singleMovie.vote_average * 10)}
                    min="0"
                    max="100"
                    style={{ visibility: "hidden", height: "0", width: "0" }}
                  >
                    {Math.round(singleMovie.vote_average * 10)}%
                  </progress>
                  <p>{Math.round(singleMovie.vote_average * 10)}%</p>
                </div>
                <h5 style={{ fontWeight: "400" }}>User Votes</h5>
              </div>
              <div className="id_overview">
                <h5>Overview</h5>

                <p>{singleMovie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default page;
