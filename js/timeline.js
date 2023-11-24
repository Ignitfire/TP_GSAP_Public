
/** put the 3 elements above in a gsap timeline with 1 second delay */
const tl = gsap.timeline({delay: 1});
tl.to(".green", {rotation: 360, x: 100, duration: 1})
  .from(".purple", {rotation: -360, x: -100, duration: 1})
  .fromTo(".blue", {x: -100},{rotation: 360, x: 100, duration: 1});