import React from "react";
import { useConfigContext } from "../hooks/useConfigContext";
import Skeleton from "react-loading-skeleton";

type Props = {
  size: string;
  path: string;
  classes: string;
  title: string;
  height?: number;
};

const ImageComponent = ({ size, path, title, classes, height }: Props) => {
  const { config } = useConfigContext();
  const imageURL = config?.images?.secure_base_url
    ? config?.images?.secure_base_url + size + path
    : "";
  return imageURL ? (
    <img src={imageURL} alt={title} className={classes} />
  ) : (
    <div data-testid="skeleton" className={classes}>
      <Skeleton className={classes} />
    </div>
  );
};

export default ImageComponent;
