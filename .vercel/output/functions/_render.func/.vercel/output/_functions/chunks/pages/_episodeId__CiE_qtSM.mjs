import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderHead, h as renderComponent } from '../astro_BVAKxeBh.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                */
/* empty css                          */
/* empty css                                */

const $$Astro$2 = createAstro();
const $$DetailLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$DetailLayout;
  const { podcastInfo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="pd-detail-layout" data-astro-cid-jzvr7uam> <aside class="pd-detail-aside" data-astro-cid-jzvr7uam> <img${addAttribute(podcastInfo.image, "src")} alt="" data-astro-cid-jzvr7uam> <div class="pd-title" data-astro-cid-jzvr7uam> <h3 data-astro-cid-jzvr7uam><a${addAttribute(`/podcast/${podcastInfo.id}`, "href")} data-astro-cid-jzvr7uam>${podcastInfo.name}</a></h3> <p data-astro-cid-jzvr7uam>by ${podcastInfo.artist}</p> </div> <div class="pd-description" data-astro-cid-jzvr7uam> <p data-astro-cid-jzvr7uam>Description:</p> <p data-astro-cid-jzvr7uam>${podcastInfo.description}</p> </div> </aside> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/quality/Documents/C\xF3digo personal/Podcaster/podcaster/src/layouts/DetailLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-ouamjn2i> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <header class="pd-header" data-astro-cid-ouamjn2i> <a href="/" class="home-title" data-astro-cid-ouamjn2i>Podcaster</a> <div id="loading-indicator" data-astro-cid-ouamjn2i>Cargando...</div> </header> ${renderSlot($$result, $$slots["default"])}  </html>`;
}, "C:/Users/quality/Documents/C\xF3digo personal/Podcaster/podcaster/src/layouts/MainLayout.astro", void 0);

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

async function getPodcastDetail(id) {
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

const podcastsData = getPodcasts();

const $$Astro = createAstro();
const $$episodeId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$episodeId;
  const { podcastId, episodeId } = Astro2.params;
  const podcastsList = await podcastsData;
  const podcastInfo = await podcastsList.find(
    (podcast) => podcast.id === podcastId
  );
  const episodesData = await getPodcastDetail(podcastId);
  const episodesArray = episodesData.results.slice(1);
  const episodes = episodesArray.map((episode2) => ({
    id: episode2.trackId,
    title: episode2.trackName,
    collectionName: episode2.collectionName,
    releaseDate: episode2.releaseDate,
    duration: episode2.trackTimeMillis,
    description: episode2.description,
    media: episode2.episodeUrl
  }));
  const episode = await episodes.find((episode2) => episode2.id == episodeId);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Podcaster", "data-astro-cid-iye2zksy": true })} ${renderComponent($$result, "DetailLayout", $$DetailLayout, { "podcastInfo": podcastInfo, "data-astro-cid-iye2zksy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article data-astro-cid-iye2zksy> <h1 data-astro-cid-iye2zksy><a${addAttribute(`/podcast/${podcastId}`, "href")} data-astro-cid-iye2zksy>${episode.title}</a></h1> <p data-astro-cid-iye2zksy>${episode.description}</p> <audio${addAttribute(episode.media, "src")} controls data-astro-cid-iye2zksy></audio> </article> ` })} `;
}, "C:/Users/quality/Documents/C\xF3digo personal/Podcaster/podcaster/src/pages/podcast/[podcastId]/episode/[episodeId].astro", void 0);

const $$file = "C:/Users/quality/Documents/Código personal/Podcaster/podcaster/src/pages/podcast/[podcastId]/episode/[episodeId].astro";
const $$url = "/podcast/[podcastId]/episode/[episodeId]";

const _episodeId_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$episodeId,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MainLayout as $, _episodeId_ as _, $$DetailLayout as a, getPodcastDetail as g, podcastsData as p };
