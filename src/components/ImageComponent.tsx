import React from "react";
import { useConfigContext } from "../hooks/useConfigContext";
import Skeleton from "react-loading-skeleton";

type Props = {
  size: string;
  path: string;
  classes: string;
  title: string;
};

const ImageComponent = ({ size, path, title, classes }: Props) => {
  const { config } = useConfigContext();
  console.log("images.secure_base_url: ", config?.images?.secure_base_url);
  const imageURL = config?.images?.secure_base_url
    ? config?.images?.secure_base_url + size + path
    : "";
  return imageURL ? (
    <img src={imageURL} alt={title} className={classes} />
  ) : (
    <Skeleton className={classes} />
  );
};

export default ImageComponent;
