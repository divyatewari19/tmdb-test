import React, { useEffect } from "react";
import { IMovie } from "../types";
import useHttpClient from "../hooks/useHttpClient";
import { HTTP_METHOD, URL } from "../utilities/constants";
import { useNavigate } from "react-router-dom";
import { getImageURL, getYearFromDate } from "../utilities/common";

type Props = {
  data: IMovie;
};

const ShowCard = ({ data }: { data: IMovie }) => {
  const navigate = useNavigate();
  return (
    <div
      className="p-4 bg-primaryColor min-w-[260px] cursor-pointer rounded-lg"
      onClick={() => navigate(`/details/${data.media_type}/${data.id}`)}
    >
      <img
        src={getImageURL(data.poster_path, "w440_and_h660_face")}
        alt={data.title}
        className="
            object-contain
            rounded-lg
            w-full
        "
      />
      <div className="text-white mt-4 flex gap-x-3 ">
        <span className="font-bold text-left">{data.title}</span>
        <span> | </span>
        <span className="">{data.vote_average.toFixed(1)}</span>
      </div>
      <div className="font-bold text-left text-white py-0">
        {getYearFromDate(data.release_date)}
      </div>
    </div>
  );
};

export default ShowCard;
