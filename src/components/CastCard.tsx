import React from "react";
import { ICast } from "../types";
import { useNavigate } from "react-router-dom";
import { getImageURL } from "../utilities/common";
import { KeyCodes } from "../utilities/constants";
import ImageComponent from "./ImageComponent";

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
      className="p-4 bg-zinc-200 hover:bg-slate-300 min-w-[160px] cursor-pointer rounded-lg"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={navigateToPersonsPage}
    >
      {data.profile_path ? (
        <ImageComponent
          title={data.name}
          size="w276_and_h350_face"
          path={data.profile_path}
          classes=" object-contain
          w-full
        h-[160px]
        cursor-pointer
        rounded-lg"
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
