import React, { useEffect } from "react";
import { IMovie } from "../types";
import useHttpClient from "../hooks/useHttpClient";
import { HTTP_METHOD, URL } from "../utilities/constants";

type Props = {
  data: IMovie;
};

const ShowCard = ({ data }: { data: IMovie }) => {
  //   const {
  //     data: image,
  //     error,
  //     isLoading,
  //   } = useHttpClient(URL.imageThumbnailRoot + data.poster_path, HTTP_METHOD.GET);
  //   useEffect(() => {
  //     fetch(URL.imageThumbnailRoot + data.poster_path)
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  //   }, []);
  return (
    <div className="p-4 bg-primaryColor min-w-[260px] ">
      <img
        src={URL.imageThumbnailRoot + data.poster_path}
        alt={data.title}
        className="
            cursor-pointer
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
        {data.release_date.split("-")[0]}
      </div>
    </div>
  );
};

export default ShowCard;
