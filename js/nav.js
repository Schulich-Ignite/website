document.addEventListener("DOMContentLoaded",()=>{const e=Array.from(document.querySelectorAll(".navbar-burger"));e.length>0&&e.forEach(e=>{e.addEventListener("click",()=>{const t=document.getElementById(e.dataset.target);e.classList.toggle("is-active"),t.classList.toggle("is-active")})})});