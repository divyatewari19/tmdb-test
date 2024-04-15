import React from "react";
import { useParams } from "react-router-dom";
import { HTTP_METHOD, URL } from "../utilities/constants";
import { ICast, ICredits, IMovieDetails } from "../types";
import useHttpClient from "../hooks/useHttpClient";
import {
  getDurationFromMinutes,
  getImageURL,
  getYearFromDate,
  getStringFromObject,
  getCurrencyFormatedString,
  getMovieCreditsURL,
} from "../utilities/common";
import CastList from "../components/CastList";

type Props = {};

const Details = (props: Props) => {
  const params = useParams();
  if (!params) return null;

  const {
    data,
    error,
    isLoading,
  }: { data: IMovieDetails; error: any; isLoading: boolean } = useHttpClient(
    URL.getMovieDetailsById + params.id,
    HTTP_METHOD.GET
  );

  const {
    data: creditsData,
    error: creditsError,
    isLoading: creditsIsLoading,
  }: { data: ICredits; error: any; isLoading: boolean } = useHttpClient(
    getMovieCreditsURL(params.id!),
    HTTP_METHOD.GET
  );

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
                  alt={data.title}
                  className="h-[20.25vw] object-fit "
                  //
                ></img>
              </div>
              <div className="text-white w-[70%]">
                <div className="flex gap-x-3 text-2xl ">
                  <span className=" p-0  font-bold drop-shadow-xl">
                    {data?.title}
                  </span>
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
                    <span>
                      {getStringFromObject(data.production_countries)}
                    </span>
                  </div>
                  <div className="flex gap-x-2">
                    <span className="font-bold">Company:</span>
                    <span>
                      {getStringFromObject(data.production_companies)}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {creditsData && (
          <CastList isLoading={creditsIsLoading} data={creditsData.cast} />
        )}
      </>
    )
  );
};

export default Details;
