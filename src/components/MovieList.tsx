import React from "react";
import { IMovie } from "../types";
import ShowCard from "./ShowCard";
import CardSkeleton from "./skeletons/CardSkeleton";

type Props = {
  data: IMovie[];
  title: string;
  isLoading: boolean;
};

const MovieList: React.FC<Props> = ({ data, title, isLoading }) => {
  return (
    <div className="space-y-8 mx-[--header-margin-left] pt-10 pb-10 ">
      <div>
        <p className="text-white text-left text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="flex overflow-x-auto space-x-4 px-0">
          {isLoading && <CardSkeleton cards={8} />}
          {data &&
            data.map((movie) => (
              <ShowCard type={movie.media_type} key={movie.id} data={movie} />
            ))}
        </div>
      </div>
    </div>
  );
  //   return <div>MovieList</div>;
};

export default MovieList;
