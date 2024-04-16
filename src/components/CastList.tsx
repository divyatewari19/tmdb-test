import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
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
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Set initial focus when cards change
    const focusedElement = cardRefs.current[activeCardIndex];
    if (focusedElement) {
      console.log("sifting focus: ", activeCardIndex);
      focusedElement.focus();
    }
  }, [activeCardIndex, data]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (
      [KeyCodes.ArrowLeft, KeyCodes.ArrowRight as string].indexOf(e.code) > -1
    ) {
      e.preventDefault();
    }
    if (e.key === KeyCodes.ArrowRight) {
      console.log(activeCardIndex, data.length);
      setActiveCardIndex((prevIndex) => Math.max(prevIndex + 1, 0));
    } else if (e.key === KeyCodes.ArrowLeft) {
      setActiveCardIndex((prevIndex) =>
        Math.min(prevIndex - 1, data.length - 1)
      );
    } else if (e.key === "Enter") {
      // navigate to details page
      console.log("Enter key pressed on card:", data[activeCardIndex]);
      navigate(`/${data[activeCardIndex]?.id}/cast`);
    }
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      className="space-y-8 mx-[--header-margin-left] pt-10 pb-20 "
    >
      <div>
        <p className="text-white text-left text-lg  lg:text-xl font-semibold mb-4 flex items-center ">
          Top Cast
        </p>
        <div className="flex overflow-x-auto space-x-4 px-0">
          {isLoading && <CardSkeleton type={ItemType.Cast} cards={8} />}
          {data &&
            data.slice(0, 10).map((cast, index) => (
              <div
                ref={(el: HTMLDivElement) => (cardRefs.current[index] = el)}
                tabIndex={index === activeCardIndex ? 0 : -1}
              >
                <CastCard key={cast.id} data={cast} />
              </div>
            ))}
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
