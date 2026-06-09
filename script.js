
window.onload=()=>gsap.to('#loader',{opacity:0,duration:1,onComplete:()=>loader.remove()});
document.addEventListener('mousemove',e=>{
let c=document.querySelector('.cursor');
c.style.left=e.clientX+'px';c.style.top=e.clientY+'px';
});
gsap.utils.toArray('.reveal').forEach(el=>{
gsap.from(el,{y:100,opacity:0,duration:1,scrollTrigger:{trigger:el,start:'top 80%'}})
});
