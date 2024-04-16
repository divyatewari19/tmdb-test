import React from "react";
import { IMovie, ITvShow } from "../types";
import { ItemType, KeyCodes } from "../utilities/constants";
import { useNavigate } from "react-router-dom";
import { getYearFromDate } from "../utilities/common";
import ImageComponent from "./ImageComponent";

type Props = {
  data: IMovie | ITvShow;
  type: string;
};

const ShowCard = ({ data, type }: Props) => {
  const navigate = useNavigate();
  const navigateToDetailsPage = () => {
    navigate(`/details/${data.media_type}/${data.id}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === KeyCodes.enter) {
      navigateToDetailsPage();
    }
  };

  let title = null;
  let releaseDate = null;
  if (data.media_type === ItemType.Movie) {
    title = (data as IMovie).title;
    releaseDate = (data as IMovie).release_date;
  } else {
    title = (data as ITvShow).name;
    releaseDate = (data as ITvShow).first_air_date;
  }

  return (
    <div
      className="p-4 bg-primaryColor min-w-[200px] hover:bg-sky-800 w-[200px] cursor-pointer rounded-lg"
      onClick={navigateToDetailsPage}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <ImageComponent
        title={title}
        size="w440_and_h660_face"
        path={data.poster_path}
        classes=" min-h-[210px]
            object-contain
            rounded-lg
            w-full"
      />
      <div className="text-white mt-4 flex gap-x-2 ">
        {/* line-clamp-2 */}
        <span className="font-bold text-left truncate">{title}</span>
        <span> | </span>
        <span className="">{data.vote_average.toFixed(1)}</span>
      </div>
      <div className="font-bold text-left text-white py-0">
        {getYearFromDate(releaseDate)}
      </div>
    </div>
  );
};
export default ShowCard;
