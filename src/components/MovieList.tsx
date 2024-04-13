import React from "react";
import { IMovie } from "../types";
import ShowCard from "./ShowCard";

type Props = {
  data: IMovie[];
  title: string;
};

const MovieList: React.FC<Props> = ({ data, title }) => {
  console.log(data);
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8 mx-[--header-margin-left] pt-10 pb-10 ">
      <div>
        <p className="text-white text-left text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        {/* <div className="grid ml-0 pl-0 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-2"> */}
        <div className="flex overflow-x-auto space-x-4 px-0">
          {data.map((movie) => (
            <ShowCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
  //   return <div>MovieList</div>;
};

export default MovieList;
