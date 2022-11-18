import React, { useEffect, useState } from "react";

import { useLazyGetPhotosQuery } from "../../redux/services/mars";
import { useAppSelector } from "../../hooks/redux";

import Loader from "../loader";

import s from "./index.module.scss";
import PhotoCard from "./photoCard";

import NoPhotographyIcon from "@mui/icons-material/NoPhotography";

const Gallery = () => {
  const PHOTOS_PER_CLICK = 10;

  const [photosRange, setPhotosRange] = useState(10);
  const [photos, setPhotos] = useState([]);
  const { rover, sol, camera } = useAppSelector((store) => store.mars);
  const [loadPhotos, { data, isLoading, isError }] = useLazyGetPhotosQuery();

  useEffect(() => {
    setPhotos(data);
    loadPhotos({ rover, sol, camera });
  }, [isLoading, camera, sol, data]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {data?.length !== 0 ? (
        <>
          <div className={s.photoContainer}>
            {photos?.length < 11
              ? photos?.map((image: any) => (
                  <PhotoCard key={image.id} {...image} />
                ))
              : photos
                  ?.slice(0, photosRange)
                  .map((image: any) => <PhotoCard key={image.id} {...image} />)}
          </div>
          {photos?.length > 10 && photosRange < data?.length && (
            <button
              className={s.loadMore}
              onClick={() =>
                setPhotosRange((prevValue) => prevValue + PHOTOS_PER_CLICK)
              }
            >
              Load More
            </button>
          )}
        </>
      ) : (
        <div className={s.noPhoto}>
          <p>There are no photos</p>
          <p>Try to change Camera or Sol</p>
          <NoPhotographyIcon style={{ fontSize: "50px" }} />
        </div>
      )}
    </>
  );
};

export default Gallery;
