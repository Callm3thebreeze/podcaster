import React from "react";
import "./podcastCard.css";

const PodcastCard = ({ name, artist, image }) => {
  return (
    <li className="pd-item">
      <a href="#" className="pd-card">
        <img src={image} alt="" />
        <div className="pd-card-text">
          <h2>{name}</h2>
          <p>{artist}</p>
        </div>
      </a>
    </li>
  );
};

export default PodcastCard;
