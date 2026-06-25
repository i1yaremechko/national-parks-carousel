(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const E="Kbpyz8qlfOkDdCVJ295SMOOf7TYTtsbBMyTMgjAp",T="https://developer.nps.gov/api/v1",u={START_INDEX:0,SLIDE_WIDTH_PCT:60,CENTER_OFFSET_PCT:20},d={TRACK_ID:"carousel-track",PREV_BTN_ID:"btn-prev",NEXT_BTN_ID:"btn-next"},g=(s,t=!1)=>{var _,f;const o=s.states||"US",l=((f=(_=s.images)==null?void 0:_[0])==null?void 0:f.url)||"https://via.placeholder.com/800x500?text=No+Image",e=s.fullName||s.name,r=t?"carousel-slide_active":"",c=s.url||"#";return`
    <div class="carousel-slide ${r}" data-id="${s.id}">
      <a href="${c}" target="_blank" class="carousel-slide__link">
        <img src="${l}" alt="${e}" class="carousel-slide__image" />
        <div class="carousel-slide__content">
          <div class="carousel-slide__state">
            <span class="carousel-slide__line"></span>
            ${o}
          </div>
          <h3 class="carousel-slide__title">${e}</h3>
          <div class="carousel-slide__button">
            <span class="carousel-slide__arrow">→</span>
          </div>
        </div>
      </a>
    </div>
  `},v=async()=>{const s=`${T}/parks?limit=10&api_key=${E}`,t=await fetch(s);if(!t.ok)throw new Error(`NPS API error: Server returned status ${t.status}`);return(await t.json()).data};let i=[],n=u.START_INDEX,a=null;const p=()=>{if(!a||i.length===0)return;const s=u.CENTER_OFFSET_PCT-n*u.SLIDE_WIDTH_PCT;a.style.transform=`translateX(${s}%)`,a.querySelectorAll(".carousel-slide").forEach((o,l)=>{l===n?o.classList.add("carousel-slide_active"):o.classList.remove("carousel-slide_active")})},m=s=>{const t=n+s;t>=0&&t<i.length&&(n=t,p())},y=async()=>{a=document.getElementById(d.TRACK_ID);const s=document.getElementById(d.PREV_BTN_ID),t=document.getElementById(d.NEXT_BTN_ID),o=document.getElementById("global-loader");if(a)try{i=await v(),a.innerHTML=i.map((l,e)=>g(l,e===n)).join(""),p(),s==null||s.addEventListener("click",()=>m(-1)),t==null||t.addEventListener("click",()=>m(1))}catch(l){console.error("Error initializing park carousel:",l.message)}finally{o==null||o.classList.add("hidden")}};y();
