import React from "react";

import "./index.scss";

const PhotoCard = ({
  img,
  earth_date,
}: {
  img: string;
  earth_date: string;
}) => {
  const generateRandomRow = () => {
    return Math.floor(Math.random() * 6);
  };
  const generateRandomColumn = () => {
    return Math.floor(Math.random() * 3);
  };

  return (
    <div
      className={`galleryContainer w-${generateRandomRow()} h-${generateRandomColumn()}`}
    >
      <div className="galleryItem">
        <div className="image">
          <img src={img} alt="mars" />
        </div>
        <p className="text">{earth_date}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
