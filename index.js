import{a as p,i as n,S as f}from"./assets/vendor-Epugobq5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const d="49632098-24a72905d1eb262516a3f1210";function g(o){return p.get("https://pixabay.com/api/",{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits.length===0?(n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),[]):t.data.hits).catch(t=>(n.error({title:"error",message:`Sorry, failed to load data!${t.message}`,position:"topRight"}),[]))}const y=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,showCounter:!1});function h(o){const t=document.querySelector(".gallery"),i=o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:a,views:c,comments:u,downloads:m})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${r}"
    />
    <ul class="gallery-info-img">
    <li><p class ="gallery-info-name">Likes <span>${a}</span></p></li>
    <li><p class ="gallery-info-name">Views <span>${c}</span></p></li>
    <li><p class ="gallery-info-name">Comments <span>${u}</span></p></li>
    <li><p class ="gallery-info-name">Downloads <span>${m}</span></p></li>

    </ul>
  </a>
</li>
`).join("");t.insertAdjacentHTML("afterbegin",i),y.refresh()}function L(){document.querySelector(".gallery").innerHTML=""}function S(){document.querySelector(".load").classList.add("loader")}function b(){document.querySelector(".load").classList.remove("loader")}const l=document.querySelector(".form"),q=document.querySelector('[name="search-text"]');l.addEventListener("submit",o=>{o.preventDefault(),S(),L(),g(q.value.trim()).then(t=>{b(),h(t)}).catch(t=>{console.error("Error fetching images:",t)}),l.reset()});
//# sourceMappingURL=index.js.map
