"use client"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "@/components/Navbar";
import axios from "axios";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

const page = () => {
  const [AiringTv, setAiringTv] = useState([])
  const [totalLength, settotalLength] = useState();
  const [curPage, setcurPage] = useState(1);
  const getAiringTv = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1`
    );
    // console.log(data.results);
    setAiringTv(data.results);
    (await data) && settotalLength(data.total_results);
    setcurPage(curPage + 1);
  };

  // console.log(totalLength);
  const fetchMoreData = async () => {
    // console.log(`https://api.themoviedb.org/3/tv/airing_today?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=${curPage}`);
    axios
      .get(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=${curPage}`
      )
      .then((data) => {
        // console.log(data);
        const nowcurmovies = [...AiringTv, ...data.data.results];
        try {
          setAiringTv([...AiringTv, ...data.data.results]);
          setcurPage(curPage + 1);
        } catch (error) {
          console.log(error);
        }
      });
  };
  useEffect(() => {
    getAiringTv();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="popular_cardHolder">
        <InfiniteScroll
          dataLength={curPage * 20}
          next={fetchMoreData}
          hasMore={AiringTv.length < totalLength ? true : false}
          loader={<h4 className="Loader">Loading...</h4>}
          className="popular_cardHolder"
        >
          {AiringTv
            ? AiringTv.map((elem) => (
                <Link
                  href={`/tv/${elem.id}`}
                  className="popular_cardholder-card movie_link"
                  key={elem.id}
                >
                  <div
                    className="popular_card-header"
                    style={{ position: "relative" }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="tm_card_circle">
                      <p style={{ marginTop: "15px" }}>
                        {Math.trunc(elem.vote_average) * 10}%
                      </p>
                    </div>
                  </div>
                  <div className="card-body" style={{ marginTop: "10px" }}>
                    <h5 className="popular_card-title">{elem.name}</h5>
                    <small className="date" style={{ color: "black" }}>
                      {elem.first_air_date &&
                        elem.first_air_date.split("-").reverse().join("-")}
                    </small>
                  </div>
                </Link>
              ))
            : "Loading"}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default page;
