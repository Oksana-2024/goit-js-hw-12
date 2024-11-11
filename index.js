import{a as S,S as q,i as M}from"./assets/vendor-Rdv7LHNr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const f="46863528-4fa0c0b33a1ffe205dd5514d4",u="https://pixabay.com/api/",n=15;async function h(r=u,e={}){return S(r,e)}function m(r){return r.map(e=>`<li class="list-item">
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
</li>`).join("")}const y=new q(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250}),P=document.querySelector("form"),i=document.querySelector(".gallery"),d=document.querySelector("input"),g=document.querySelector(".loader"),p=document.querySelector(".load-more-btn");let s=1;P.addEventListener("submit",$);p.addEventListener("click",E);async function $(r){if(r.preventDefault(),i.innerHTML="",!d.value.trim())return;s=1;const e={key:f,q:d.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:n};v();try{const a=await h(`${u}`,{params:e});if(a.data.hits.length<1){M.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#ef4040",messageColor:"#fff",theme:"dark"}),i.innerHTML="";return}i.innerHTML=m(a.data.hits),y.refresh(),a.data.total>n?b():w()}catch(a){console.log(a)}finally{L()}}function v(){g.classList.remove("hidden")}function L(){g.classList.add("hidden")}function b(){p.classList.remove("hidden-load-btn")}function w(){p.classList.add("hidden-load-btn")}async function E(){s+=1;try{v();const r={key:f,q:d.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:n},e=await h(`${u}`,{params:r},s);i.insertAdjacentHTML("beforeend",m(e.data.hits)),y.refresh();const a=document.querySelector(".gallery li").getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"}),Math.ceil(e.data.total/n)===s?w():b()}catch(r){console.log(r)}finally{L()}}
//# sourceMappingURL=index.js.map
