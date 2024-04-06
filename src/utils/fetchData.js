export async function getPodcasts(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}
