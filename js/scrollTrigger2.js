


const blockToRight = function (){
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const description = section.querySelector('.description');
    const img = section.querySelector('img');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom center',
        scrub: true,
        markers: true,
      }
    })
    
    tl.from(img, {opacity: 0, rotate: 360})
    .from(description, {x:-50, opacity: 0})
  })
}



blockToRight();