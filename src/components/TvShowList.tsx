import React from "react";
import { ITvShow } from "../types";
import CardSkeleton from "./skeletons/CardSkeleton";
import ShowCard from "./ShowCard";

type Props = {
  data: ITvShow[];
  title: string;
  isLoading: boolean;
};

const TvShowList: React.FC<Props> = ({ data, title, isLoading }) => {
  return (
    <div className="space-y-8 mx-[--header-margin-left] pt-10 pb-10 ">
      <div>
        <p className="text-white text-left text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="flex overflow-x-auto space-x-4 px-0">
          {isLoading && <CardSkeleton cards={8} />}
          {data &&
            data.map((show) => (
              <ShowCard key={show.id} type={show.media_type} data={show} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TvShowList;
