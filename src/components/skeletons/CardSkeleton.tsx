import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ItemType } from "../../utilities/constants";

type Props = {
  cards: number;
  type?: string;
};

const CardSkeleton = ({ cards, type }: Props) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className={`w-full items-stretch p-3 ${
          type === ItemType.Cast ? "bg-white" : "bg-primaryColor"
        } border-2 border-primaryColor rounded-lg`}
      >
        <div className="min-w-[260px] pb-3 ">
          <Skeleton height={340} />
        </div>
        <div>
          <Skeleton count={2} />
        </div>
      </div>
    ));
};

export default CardSkeleton;
