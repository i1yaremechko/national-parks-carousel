(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();const g="Kbpyz8qlfOkDdCVJ295SMOOf7TYTtsbBMyTMgjAp",v="https://developer.nps.gov/api/v1",f={START_INDEX:0,SLIDE_WIDTH_PCT:60,CENTER_OFFSET_PCT:20},_={TRACK_ID:"carousel-track",PREV_BTN_ID:"btn-prev",NEXT_BTN_ID:"btn-next"},y=(s,e=!1)=>{var m,p;const l=s.states||"US",o=((p=(m=s.images)==null?void 0:m[0])==null?void 0:p.url)||"https://via.placeholder.com/800x500?text=No+Image",t=s.fullName||s.name,r=e?"carousel-slide_active":"",n=s.url||"#";return`
    <div class="carousel-slide ${r}" data-id="${s.id}">
      <a href="${n}" target="_blank" class="carousel-slide__link">
        <img src="${o}" alt="${t}" class="carousel-slide__image" />
        <div class="carousel-slide__content">
          <div class="carousel-slide__state">
            <span class="carousel-slide__line"></span>
            ${l}
          </div>
          <h3 class="carousel-slide__title">${t}</h3>
          <div class="carousel-slide__button">
            <span class="carousel-slide__arrow">→</span>
          </div>
        </div>
      </a>
    </div>
  `},I=async()=>{const s=`${v}/parks?limit=10&api_key=${g}`,e=await fetch(s);if(!e.ok)throw new Error(`NPS API error: Server returned status ${e.status}`);return(await e.json()).data};let u=[],c=f.START_INDEX,a=null,i=null,d=null;const T=()=>{if(!a||u.length===0)return;const s=f.CENTER_OFFSET_PCT-c*f.SLIDE_WIDTH_PCT;a.style.transform=`translateX(${s}%)`,a.querySelectorAll(".carousel-slide").forEach((l,o)=>{o===c?l.classList.add("carousel-slide_active"):l.classList.remove("carousel-slide_active")})},E=s=>{const e=c+s;e>=0&&e<u.length&&(c=e,T())},h=async()=>{a=document.getElementById(_.TRACK_ID),i=document.getElementById(_.PREV_BTN_ID),d=document.getElementById(_.NEXT_BTN_ID);const s=document.getElementById("global-loader");if(a)try{u=await I(),a.innerHTML=u.map((e,l)=>y(e,l===c)).join(""),T(),i==null||i.addEventListener("click",()=>E(-1)),d==null||d.addEventListener("click",()=>E(1))}catch(e){console.error("Error initializing park carousel:",e.message)}finally{s==null||s.classList.add("hidden")}};h();
