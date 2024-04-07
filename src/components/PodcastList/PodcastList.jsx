import { useState } from "react";
import PodcastCard from "../PodcastCard/PodcastCard";
import "./podcastList.css";

const PodcastList = ({ podcastsData }) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredPodcasts = podcastsData.filter(
    (podcast) =>
      podcast.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      podcast.artist.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="pd-search">
        <h1>{filteredPodcasts.length}</h1>
        <input
          type="search"
          placeholder="Search for a podcast or artist..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="pd-grid">
        {filteredPodcasts.map((podcast) => (
          <PodcastCard
            key={podcast.id}
            id={podcast.id}
            name={podcast.name}
            artist={podcast.artist}
            image={podcast.image}
          />
        ))}
      </div>
    </>
  );
};

export default PodcastList;
