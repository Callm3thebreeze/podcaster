import{r as c}from"./index.NEDEFKed.js";/* empty css                       */var d={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=c,u=Symbol.for("react.element"),x=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,f=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function p(a,e,o){var s,r={},i=null,l=null;o!==void 0&&(i=""+o),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(s in e)h.call(e,s)&&!_.hasOwnProperty(s)&&(r[s]=e[s]);if(a&&a.defaultProps)for(s in e=a.defaultProps,e)r[s]===void 0&&(r[s]=e[s]);return{$$typeof:u,type:a,key:i,ref:l,props:r,_owner:f.current}}n.Fragment=x;n.jsx=p;n.jsxs=p;d.exports=n;var t=d.exports;const j=({id:a,name:e,artist:o,image:s})=>t.jsx("li",{className:"pd-item",children:t.jsxs("a",{href:`/podcast/${a}`,className:"pd-card",children:[t.jsx("img",{src:s,alt:"podcast cover"}),t.jsxs("div",{className:"pd-card-text",children:[t.jsx("h2",{children:e}),t.jsx("p",{children:o})]})]})}),g=({podcastsData:a})=>{const[e,o]=c.useState(""),s=a.filter(r=>r.name.toLowerCase().includes(e.toLowerCase())||r.artist.toLowerCase().includes(e.toLowerCase()));return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"pd-search",children:[t.jsx("h1",{children:s.length}),t.jsx("input",{type:"search",placeholder:"Search for a podcast or artist...",value:e,onChange:r=>o(r.target.value)})]}),t.jsx("div",{className:"pd-grid",children:s.map(r=>t.jsx(j,{id:r.id,name:r.name,artist:r.artist,image:r.image},r.id))})]})};export{g as default};
