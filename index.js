import{a as q,S as P,i as d}from"./assets/vendor-Rdv7LHNr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const h="46863528-4fa0c0b33a1ffe205dd5514d4",p="https://pixabay.com/api/",n=15;async function m(r=p,e={}){return q(r,e)}function g(r){return r.map(e=>`<li class="list-item">
<a class='link-item' href="${e.largeImageURL}">
  <img src="${e.webformatURL}" alt="${e.tags}" width = '360' height = '200'>
 <div class='desc-container'>
          <div>
            <p class='title'>likes</p>
            <p class='title-value'>${e.likes}</p>
          </div>
          <div>
            <p class='title'>views</p>
            <p class='title-value'>${e.views}</p>
          </div>
          <div>
            <p class='title'>comments</p>
            <p class='title-value'>${e.comments}</p>
          </div>
          <div>
            <p class='title'>downloads</p>
            <p class='title-value'>${e.downloads}</p>
          </div>
        </div>
</a>
</li>`).join("")}const y=new P(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250}),M=document.querySelector("form"),i=document.querySelector(".gallery"),u=document.querySelector("input"),v=document.querySelector(".loader"),f=document.querySelector(".load-more-btn");let s=1;M.addEventListener("submit",E);f.addEventListener("click",$);async function E(r){if(r.preventDefault(),i.innerHTML="",!u.value.trim()){d.show({message:"Please enter the data to perform the search.",position:"topRight",color:"#ef4040",messageColor:"#fff",theme:"dark"});return}s=1;const e={key:h,q:u.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:n};L();try{const a=await m(`${p}`,{params:e});if(a.data.hits.length<1){d.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#ef4040",messageColor:"#fff",theme:"dark"}),i.innerHTML="";return}i.innerHTML=g(a.data.hits),y.refresh(),a.data.total>n?w():S()}catch(a){console.log(a)}finally{b()}}function L(){v.classList.remove("hidden")}function b(){v.classList.add("hidden")}function w(){f.classList.remove("hidden-load-btn")}function S(){f.classList.add("hidden-load-btn")}async function $(){s+=1;try{L();const r={key:h,q:u.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:n},e=await m(`${p}`,{params:r},s);i.insertAdjacentHTML("beforeend",g(e.data.hits)),y.refresh();const a=document.querySelector(".gallery li").getBoundingClientRect();if(window.scrollBy({top:a.height*2,behavior:"smooth"}),Math.ceil(e.data.total/n)===s){S(),d.show({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter",color:"#E6E6FA",messageColor:"#483D8B",theme:"light"});return}w()}catch(r){console.log(r)}finally{b()}}
//# sourceMappingURL=index.js.map
