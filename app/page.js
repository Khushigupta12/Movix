import Footer from "@/components/Footer";
import FrontDisplay from "@/components/FrontDisplay";
import Navbar from "@/components/Navbar";
import PopularMovies from "@/components/PopularMovies";
import TrendingMovies from "@/components/TrendingMovies";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <FrontDisplay />
      <TrendingMovies />
      <PopularMovies />
      <Footer />
    </>
  );
};

export default page;
