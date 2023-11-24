


const blockToRight = function (){
  const block = document.querySelector('#block');
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: block,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      markers: true,
    }
  })
  
  tl.to(block, {x: 400})
}



blockToRight();