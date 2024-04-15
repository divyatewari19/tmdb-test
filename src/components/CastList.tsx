import React from "react";
import { ICast } from "../types";
import CastCard from "./CastCard";
import { useNavigate } from "react-router-dom";
import { ItemType, KeyCodes } from "../utilities/constants";
import CardSkeleton from "./skeletons/CardSkeleton";

type Props = {
  data: ICast[];
  isLoading: boolean;
};

const CastList: React.FC<Props> = ({ data, isLoading }) => {
  const navigate = useNavigate();
  //   if (!data || data.length === 0) return null;

  return (
    <div className="space-y-8 mx-[--header-margin-left] pt-10 pb-20 ">
      <div>
        <p className="text-white text-left text-lg  lg:text-xl font-semibold mb-4 flex items-center ">
          Top Cast
        </p>
        <div className="flex overflow-x-auto space-x-4 px-0">
          {isLoading && <CardSkeleton type={ItemType.Cast} cards={8} />}
          {data &&
            data
              .slice(0, 10)
              .map((cast) => <CastCard key={cast.id} data={cast} />)}
          {data && (
            <div
              className="text-white min-w-48 flex flex-nowrap font-bold cursor-pointer items-center self-center"
              tabIndex={0}
              onKeyDown={(e) =>
                e.code === KeyCodes.enter ? navigate(`/:id/cast`) : ""
              }
              onClick={() => navigate(`/:id/cast`)}
            >
              View More
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CastList;
