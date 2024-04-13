import React from "react";
import { ICast } from "../types";
import CastCard from "./CastCard";
import { useNavigate } from "react-router-dom";

type Props = {
  data: ICast[];
};

const CastList: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  if (!data || data.length === 0) return null;

  return (
    <div className="space-y-8 mx-[--header-margin-left] pt-10 pb-20 ">
      <div>
        <p className="text-white text-left text-md md:text-xl lg:text-2xl font-semibold mb-4 flex items-center ">
          Top Cast
        </p>
        <div className="flex overflow-x-auto space-x-4 px-0">
          {data.slice(0, 10).map((cast) => (
            <CastCard key={cast.id} data={cast} />
          ))}
          <div
            className="text-white min-w-48 flex flex-nowrap font-bold cursor-pointer items-center self-center"
            onClick={() => navigate(`/:id/cast`)}
          >
            View More
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastList;
