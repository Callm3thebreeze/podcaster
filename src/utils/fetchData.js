async function getPodcasts() {
  try {
    const response = await fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    );
    const json = await response.json();

    let podcastsData = json.feed.entry.map((podcast) => ({
      id: podcast.id.attributes["im:id"],
      name: podcast["im:name"].label,
      image: podcast["im:image"][2].label,
      artist: podcast["im:artist"].label,
      category: podcast.category.attributes.label,
      summary: podcast.summary.label,
      link: podcast.link.attributes.href,
      description: podcast.summary.label,
    }));

    return podcastsData;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

export async function getPodcastDetail(id) {
  try {
    const response = await fetch(
      `https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode&limit=250`
    );
    const json = await response.json();

    return json;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

export const podcastsData = getPodcasts();
