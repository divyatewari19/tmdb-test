import React from "react";
import { IMovie } from "../types";

type Props = {
  data: IMovie[];
  title: string;
  isLoading: boolean;
};

const TvShowList: React.FC<Props> = ({ data, title, isLoading }) => {
  return <div>TvShowList</div>;
};

export default TvShowList;
