import{f as m,i as p}from"./assets/vendor-9808d4ac.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const y=document.querySelector("#datetime-picker"),u=document.querySelector("button[data-start]");let d={};const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){d=e[0],g(d)}};function g(e){const r=new Date;r.setHours(0,0,0,0),e<r?(u.disabled=!0,p.show({message:"Please choose a date in the future"})):u.disabled=!1}u.addEventListener("click",e=>{const r=d-Date.now();l(r),c(r)});function l(e){if(e<=0){console.log("Таймер завершено!");return}c(e),e>0&&setTimeout(()=>{l(e-1e3)},1e3)}m(y,h);function c(e){const o=Math.floor(e/864e5),n=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return S(o,n,i,f)}const S=(e,r,a,s)=>{const t=document.querySelector(".timer [data-days]"),o=document.querySelector(".timer [data-hours]"),n=document.querySelector(".timer [data-minutes]"),i=document.querySelector(".timer [data-seconds]");t.textContent=e.toString().padStart(2,"0"),o.textContent=r.toString().padStart(2,"0"),n.textContent=a.toString().padStart(2,"0"),i.textContent=s.toString().padStart(2,"0")};console.log(c(2e3));console.log(c(14e4));console.log(c(2414e4));
//# sourceMappingURL=commonHelpers.js.map
