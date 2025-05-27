import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[3%]"
    >
      <h1 className="w-2/3 text-5xl font-black text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>

      <p className="text-white w-2/3 mt-3 mb-3">
        {data.overview.slice(0, 200)}...
        <Link 
        to={`/${data.media_type}/details/${data.id}`}
        className="text-blue-400">more</Link>
      </p>

      <p className="text-white">
        <i className="text-yellow-500 ri-megaphone-fill "></i> {data.release_date || "No Information"}
        <i className="text-yellow-500 ri-album-fill  ml-3"></i> {data.media_type.toUpperCase()}
      </p>
      <Link className="bg-[#6556CD] p-2 rounded text-white mt-4">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
