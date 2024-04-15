import React from "react";
import { useParams } from "react-router-dom";
import { HTTP_METHOD, ItemType, URL } from "../../utilities/constants";
import { ICast, ICredits, IMovieDetails, ITvDetails } from "../../types";
import useHttpClient from "../../hooks/useHttpClient";
import { getCreditsURL } from "../../utilities/common";
import CastList from "../../components/CastList";
import MovieDetails from "./Banner";

type Props = {};

const Details: React.FC<Props> = (props: Props) => {
  const params = useParams();
  console.log(params);
  if (!params) return null;
  let detailsUrl = "";
  let creditsUrl = "";
  if (params.mediatype === ItemType.Movie) {
    detailsUrl = URL.getMovieDetailsById + params.id;
    // creditsUrl = getCreditsURL(params.mediatype, params.id!);
  } else {
    detailsUrl = URL.getTvDetailsById + params.id;
    // creditsUrl = "";
  }

  const {
    data,
    error,
    isLoading,
  }: { data: IMovieDetails | ITvDetails; error: any; isLoading: boolean } =
    useHttpClient(detailsUrl, HTTP_METHOD.GET);

  const {
    data: creditsData,
    error: creditsError,
    isLoading: creditsIsLoading,
  }: { data: ICredits; error: any; isLoading: boolean } = useHttpClient(
    getCreditsURL(params.mediatype!, params.id!),
    HTTP_METHOD.GET
  );
  console.log("creditsError", creditsError);
  return (
    <>
      {params.id && params.mediatype && (
        <MovieDetails mediatype={params.mediatype} data={data} id={params.id} />
      )}
      {!creditsError && creditsData && (
        <CastList isLoading={creditsIsLoading} data={creditsData.cast} />
      )}
    </>
  );
};

export default Details;
