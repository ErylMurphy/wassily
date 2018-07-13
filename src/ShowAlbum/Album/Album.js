import React from "react";

const Album = props => {
  const { title, artistName, coverImageUrl, year } = props;
  return (
    <div className="Record">
      <img src={coverImageUrl} />
      <h2>
        {artistName} - {title}
      </h2>
      <p>{year}</p>
    </div>
  );
};

export default Album;
