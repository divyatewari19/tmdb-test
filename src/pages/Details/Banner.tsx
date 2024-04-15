import React from "react";
import { IMovieDetails, ITvDetails } from "../../types";
import { HTTP_METHOD, ItemType, URL } from "../../utilities/constants";
import {
  getImageURL,
  getStringFromObject,
  getYearFromDate,
} from "../../utilities/common";
import useHttpClient from "../../hooks/useHttpClient";

type Props = {
  id: string;
  data: IMovieDetails | ITvDetails;
  mediatype: string;
};

const Banner: React.FC<Props> = ({ id, data, mediatype }: Props) => {
  //   const {
  //     data,
  //     error,
  //     isLoading,
  //   }: { data: IMovieDetails; error: any; isLoading: boolean } = useHttpClient(
  //     URL.getMovieDetailsById + id,
  //     HTTP_METHOD.GET
  //   );
  console.log(data);
  const renderMovieDetails = (data: IMovieDetails) => {
    return (
      <>
        <div className="flex gap-x-3 text-2xl ">
          <span className=" p-0  font-bold drop-shadow-xl">{data?.title}</span>
          <span className="text-zinc-300">
            ({getYearFromDate(data?.release_date)})
          </span>
        </div>
        <div className="text-zinc-400  italic"> {data?.tagline}</div>
        <div className="mt-4">
          <div className="font-bold text-xl mb-2">Overview</div>
          <div>{data.overview}</div>
        </div>
        <div className="grid mt-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="flex gap-x-2">
            <span className="font-bold">Status:</span>
            <span>{data.status}</span>
          </div>
          <div className="flex gap-x-2">
            <span className="font-bold">Rating:</span>
            <span>{data.vote_average.toFixed(1)}</span>
          </div>

          <div className="flex gap-x-2">
            <span className="font-bold">Duration:</span>
            <span>{data.runtime} min</span>
          </div>
          <div className="flex gap-x-2">
            <span className="font-bold">Genre:</span>
            <span>{getStringFromObject(data.genres)}</span>
          </div>
          <div className="flex gap-x-2">
            <span className="font-bold">Country:</span>
            <span>{getStringFromObject(data.production_countries)}</span>
          </div>
          <div className="flex gap-x-2">
            <span className="font-bold">Company:</span>
            <span>{getStringFromObject(data.production_companies)}</span>
          </div>
        </div>
      </>
    );
  };

  const renderTvDetails = (data: ITvDetails) => {
    return (
      <>
        <div className="flex gap-x-3 text-2xl ">
          <span className=" p-0  font-bold drop-shadow-xl">{data?.name}</span>
          <span className="text-zinc-300">
            ({getYearFromDate(data?.first_air_date)})
          </span>
        </div>
        <div className="text-zinc-400  italic"> {data?.tagline}</div>
        <div className="mt-4">
          <div className="font-bold text-xl mb-2">Overview</div>
          <div>{data.overview}</div>
        </div>
        <div className="grid mt-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="flex gap-x-2">
            <span className="font-bold">Status:</span>
            <span>{data.status}</span>
          </div>
          <div className="flex gap-x-2">
            <span className="font-bold">Rating:</span>
            <span>{data.vote_average.toFixed(1)}</span>
          </div>

          <div className="flex gap-x-2">
            <span className="font-bold">Type:</span>
            <span>{data.type}</span>
          </div>
          <div className="flex gap-x-2">
            <span className="font-bold">Genre:</span>
            <span>{getStringFromObject(data.genres)}</span>
          </div>
          <div className="flex gap-x-2">
            <span className="font-bold">Number of Season:</span>
            <span>{data.number_of_seasons}</span>
          </div>
          <div className="flex gap-x-2">
            <span className="font-bold">Number of Episodes:</span>
            <span>{data.number_of_episodes}</span>
          </div>

          <div className="flex gap-x-2">
            <span className="font-bold">Networks:</span>
            <span>{getStringFromObject(data.networks)}</span>
          </div>
          <div className="flex gap-x-2">
            <span className="font-bold">Company:</span>
            <span>{getStringFromObject(data.production_companies)}</span>
          </div>
        </div>
      </>
    );
  };

  return (
    data && (
      <>
        <div
          style={{
            backgroundImage: `url(${getImageURL(
              data.backdrop_path,
              "w1920_and_h800_multi_faces"
            )}) `,
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "lighten",
            backdropFilter: "blur(10px)",
          }}
          className="relative min-h-[20.25vw] "
        >
          <div className="min-h-[20.25vw] py-12  pl-[--header-margin-left] bg-slate-800 backdrop-blur-sm bg-opacity-40">
            <section className="md:top-1/5 gap-x-10 left-[--header-margin-left] sm:top-10   flex">
              <div>
                <img
                  src={getImageURL(data.poster_path, "w440_and_h660_face")}
                  alt={
                    mediatype === ItemType.Movie
                      ? data.title
                      : (data as ITvDetails).name
                  }
                  className="h-[20.25vw] object-fit "
                  //
                ></img>
              </div>
              <div className="text-white w-[70%]">
                {mediatype === ItemType.Movie
                  ? renderMovieDetails(data as IMovieDetails)
                  : renderTvDetails(data as ITvDetails)}
              </div>
            </section>
          </div>
        </div>
      </>
    )
  );
};

export default Banner;
