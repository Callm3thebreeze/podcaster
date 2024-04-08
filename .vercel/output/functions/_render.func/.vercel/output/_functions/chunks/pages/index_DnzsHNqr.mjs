import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderComponent } from '../astro_BVAKxeBh.mjs';
import 'kleur/colors';
import 'html-escaper';
import { p as podcastsData, g as getPodcastDetail, $ as $$MainLayout, a as $$DetailLayout } from './_episodeId__CiE_qtSM.mjs';
import 'clsx';
/* empty css                          */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$EpisodesList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EpisodesList;
  const { episodesData } = Astro2.props;
  const podcastName = episodesData.results[0].collectionName;
  const podcastsList = await podcastsData;
  const podcast = await podcastsList.find(
    (podcast2) => podcast2.name === podcastName
  );
  const podcastId = podcast.id;
  const episodesArray = episodesData.results.slice(1);
  const episodesNumber = episodesData.resultCount;
  const episodes = episodesArray.map((episode) => ({
    id: episode.trackId,
    title: episode.trackName,
    collectionName: episode.collectionName,
    releaseDate: episode.releaseDate,
    duration: episode.trackTimeMillis,
    description: episode.description,
    media: episode.episodeUrl
  }));
  return renderTemplate`${maybeRenderHead()}<article class="pd-episodes-container" data-astro-cid-2qqmk5qo> <h3 data-astro-cid-2qqmk5qo>Episodes: ${episodesNumber}</h3> <table class="pd-episodes-list" data-astro-cid-2qqmk5qo> <thead data-astro-cid-2qqmk5qo> <tr data-astro-cid-2qqmk5qo> <th data-astro-cid-2qqmk5qo>Título del Podcast</th> <th data-astro-cid-2qqmk5qo>Fecha de Salida</th> <th data-astro-cid-2qqmk5qo>Duración</th> </tr> </thead> <tbody data-astro-cid-2qqmk5qo> ${episodes.map((episode) => renderTemplate`<tr data-astro-cid-2qqmk5qo> <td data-astro-cid-2qqmk5qo> <a${addAttribute(`/podcast/${podcastId}/episode/${episode.id}`, "href")} data-astro-cid-2qqmk5qo> ${episode.title} </a> </td> <td data-astro-cid-2qqmk5qo>${episode.releaseDate}</td> <td data-astro-cid-2qqmk5qo>${episode.duration}</td> </tr>`)} </tbody> </table> </article> `;
}, "C:/Users/quality/Documents/C\xF3digo personal/Podcaster/podcaster/src/components/EpisodesList.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { podcastId } = Astro2.params;
  const podcastsList = await podcastsData;
  const podcastInfo = await podcastsList.find(
    (podcast) => podcast.id === podcastId
  );
  const episodesData = await getPodcastDetail(podcastId);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Podcaster", "data-astro-cid-5sldd5mo": true })} ${renderComponent($$result, "DetailLayout", $$DetailLayout, { "podcastInfo": podcastInfo, "data-astro-cid-5sldd5mo": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "EpisodesList", $$EpisodesList, { "episodesData": episodesData, "data-astro-cid-5sldd5mo": true })} ` })} `;
}, "C:/Users/quality/Documents/C\xF3digo personal/Podcaster/podcaster/src/pages/podcast/[podcastId]/index.astro", void 0);

const $$file$1 = "C:/Users/quality/Documents/Código personal/Podcaster/podcaster/src/pages/podcast/[podcastId]/index.astro";
const $$url$1 = "/podcast/[podcastId]";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const PodcastCard = ({ id, name, artist, image }) => {
  return /* @__PURE__ */ jsx("li", { className: "pd-item", children: /* @__PURE__ */ jsxs("a", { href: `/podcast/${id}`, className: "pd-card", children: [
    /* @__PURE__ */ jsx("img", { src: image, alt: "podcast cover" }),
    /* @__PURE__ */ jsxs("div", { className: "pd-card-text", children: [
      /* @__PURE__ */ jsx("h2", { children: name }),
      /* @__PURE__ */ jsx("p", { children: artist })
    ] })
  ] }) });
};

const PodcastList = ({ podcastsData }) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredPodcasts = podcastsData.filter(
    (podcast) => podcast.name.toLowerCase().includes(searchValue.toLowerCase()) || podcast.artist.toLowerCase().includes(searchValue.toLowerCase())
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "pd-search", children: [
      /* @__PURE__ */ jsx("h1", { children: filteredPodcasts.length }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "search",
          placeholder: "Search for a podcast or artist...",
          value: searchValue,
          onChange: (e) => setSearchValue(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pd-grid", children: filteredPodcasts.map((podcast) => /* @__PURE__ */ jsx(
      PodcastCard,
      {
        id: podcast.id,
        name: podcast.name,
        artist: podcast.artist,
        image: podcast.image
      },
      podcast.id
    )) })
  ] });
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let podcastsList = await podcastsData;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Podcaster", "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result, "PodcastList", PodcastList, { "client:load": true, "podcastsData": podcastsList, "client:component-hydration": "load", "client:component-path": "@/components/PodcastList/PodcastList.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </main> `;
}, "C:/Users/quality/Documents/C\xF3digo personal/Podcaster/podcaster/src/pages/index.astro", void 0);

const $$file = "C:/Users/quality/Documents/Código personal/Podcaster/podcaster/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
