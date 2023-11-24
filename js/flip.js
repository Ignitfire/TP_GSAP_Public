
gsap.registerPlugin(Flip);

const squares = gsap.utils.toArray(".box");

function doFlip() {
  // Get the initial state
  const state = Flip.getState(squares);
  
  // Make DOM or styling changes (swap the squares in our case)
  swap(squares);
  
  // Animate from the initial state to the end state
  Flip.from(state, {duration: 2, ease: "power1.inOut"});
}

// Given an Array of two siblings, append the one that's first so it's last (swap)
function swap([a, b]) {
  a.parentNode.children[0] === a ? a.parentNode.appendChild(a) : a.parentNode.appendChild(b);
}

// click anywhere to flip
document.addEventListener("click", doFlip);