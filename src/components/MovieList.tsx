import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import { IMovie } from "../types";
import ShowCard from "./ShowCard";
import CardSkeleton from "./skeletons/CardSkeleton";
import { useNavigate } from "react-router-dom";
import { KeyCodes } from "../utilities/constants";

type Props = {
  data: IMovie[];
  title: string;
  isLoading: boolean;
  isActive: boolean;
};

const MovieList: React.FC<Props> = ({ data, title, isLoading, isActive }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  console.log("Movie isActive: ", isActive);
  const navigate = useNavigate();

  useEffect(() => {
    if (isActive && activeCardIndex === -1) {
      console.log("div----- active");
      setActiveCardIndex(0);
    }
  }, [isActive]);

  useEffect(() => {
    // Set initial focus when cards change
    if (cardRefs.current[activeCardIndex]) {
      console.log("sifting focus: ", activeCardIndex);
      if (isActive) {
        cardRefs.current[activeCardIndex].focus();
      } else {
        cardRefs.current[activeCardIndex].blur();
      }
    }
  }, [activeCardIndex, data]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if ([KeyCodes.ArrowLeft, KeyCodes.ArrowRight, "Tab"].indexOf(e.code) > -1) {
      e.preventDefault();
    }
    if (e.key === KeyCodes.ArrowRight) {
      console.log(activeCardIndex, data.length);
      setActiveCardIndex((prevIndex) => Math.max(prevIndex + 1, 0));
    } else if (e.key === KeyCodes.ArrowLeft) {
      if (isActive && activeCardIndex === -1) {
        setActiveCardIndex(0);
      }
      setActiveCardIndex((prevIndex) =>
        Math.min(prevIndex - 1, data.length - 1)
      );
    } else if (
      e.key === "Tab" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowUp"
    ) {
      if (cardRefs.current[activeCardIndex]) {
        cardRefs.current[activeCardIndex].blur();
      }
      setActiveCardIndex(-1);
    } else if (e.key === "Enter") {
      // navigate to details page
      console.log("Enter key pressed on card:", data[activeCardIndex]);
      navigate(
        `/details/${data[activeCardIndex].media_type}/${data[activeCardIndex].id}`
      );
    }
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      className="space-y-8 mx-[--header-margin-left] pt-10 pb-10  "
    >
      <div>
        <p className="text-white text-left text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="flex overflow-x-auto space-x-4 px-0">
          {isLoading && <CardSkeleton cards={8} />}
          {data &&
            data.map((movie, index) => (
              <div
                ref={(el: HTMLDivElement) => (cardRefs.current[index] = el)}
                tabIndex={index === activeCardIndex ? 0 : -1}
              >
                <ShowCard type={movie.media_type} key={movie.id} data={movie} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
  //   return <div>MovieList</div>;
};

export default MovieList;
