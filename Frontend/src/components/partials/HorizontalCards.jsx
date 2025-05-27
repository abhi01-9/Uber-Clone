import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data  }) => {
  return ( 
      <div 
      className="w-[100%] flex overflow-y-hidden p-5 mb-3">
        {data.map((d, i) => (
          <Link 
          to={`/${d.media_type}/details/${d.id}`}
          key={i} className="min-w-[16%]  mr-5 bg-zinc-900 mb-2">
            <img
              className="w-full h-[45%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />

            <div className="text-white p-2 h-[55%]">
              <h1 className="text-xl font-semibold ">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>

              <p className="text-sm">
                {d.overview.slice(0, 50)}...
                <Link className="text-zinc-500">more</Link>
              </p>
            </div>
          </Link>
        ))}
      </div>
   
  );
};

export default HorizontalCards;
