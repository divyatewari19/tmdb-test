import React from "react";
import { ICast } from "../types";
import { useNavigate } from "react-router-dom";
import { getImageURL } from "../utilities/common";
import { KeyCodes } from "../utilities/constants";

type Props = {
  data: ICast;
};

const CastCard = ({ data }: Props) => {
  const navigate = useNavigate();
  const navigateToPersonsPage = () => {
    navigate(`/person/${data.id}`, { state: { name: data.name } });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === KeyCodes.enter) {
      navigateToPersonsPage();
    }
  };

  return (
    <div
      className="p-4 bg-zinc-200 hover:bg-slate-300 min-w-[210px] cursor-pointer rounded-lg"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={navigateToPersonsPage}
    >
      {data.profile_path ? (
        <img
          src={getImageURL(data.profile_path, "w276_and_h350_face")}
          alt={data.name}
          className="
              object-contain
              rounded-lg
              w-full
              min-h-[300px]
              cursor-pointer
          "
        />
      ) : (
        <div className="w-[210px] h-[225px]"></div>
      )}
      <div className="text-black mt-4">
        <div className="font-bold text-left">{data.name}</div>
        <div className="">{data.character}</div>
      </div>
    </div>
  );
};

export default CastCard;
