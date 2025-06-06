import axios from "../../utils/axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className="text-2xl">MVDB</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <h1 className="text-white font-semibold text-xl my-6 mb-3">
          New Feeds
        </h1>

        <Link
          to="/trending"
          className="hover:bg-[#6556CD]  text-white rounded-lg  duration-300 px-5 pb-3 py-3 flex"
        >
          <i className="ri-fire-fill mr-2"></i>Trending
        </Link>
        <Link 
        to="/popular"
        className="hover:bg-[#6556CD]  text-white rounded-lg  duration-300 px-5 pb-3 py-3">
          <i className="ri-bard-fill mr-2"></i>Popular
        </Link>
        <Link
        to="/movie"
         className="hover:bg-[#6556CD]  text-white rounded-lg  duration-300 px-5 pb-3 py-3">
          <i className="ri-movie-2-ai-line mr-2"></i>Movies
        </Link>
        <Link 
        to="/tv"
        className="hover:bg-[#6556CD]  text-white rounded-lg  duration-300 px-5 pb-3 py-3">
          <i className="ri-tv-2-fill mr-2"></i>Tv Shows
        </Link>
        <Link 
        to="/person"
        className="hover:bg-[#6556CD]  text-white rounded-lg  duration-300 px-5 pb-3 py-3 mb-5">
          <i className="ri-team-fill mr-2"></i> People
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400 " />

      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl my-10 mb-5">
          Website Information
        </h1>

        <Link className="hover:bg-[#6556CD]  text-white rounded-lg  duration-300 px-5 pb-3 py-3 flex">
          <i className="ri-information-fill mr-2"></i>About MVDB
        </Link>
        <Link className="hover:bg-[#6556CD]  text-white rounded-lg  duration-300 px-5 pb-3 py-3">
          <i className="ri-phone-fill mr-2"></i>Contact US
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
