const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

// ---------------------------------

const home = document.querySelector('.home');
const image = document.querySelector('.image');
const liens = document.getElementsByClassName('lien');
const pages = document.getElementsByClassName('page');


for (let i = 0; i < liens.length; i++) {
  const lien = liens[i];
  
  lien.addEventListener('click', (event) => {
    
    for (let j = 0; j < pages.length; j++) 
    {
      const page = pages[j]; 
      if (page.attributes['id'].value === lien.attributes['id'].value) {
        event.preventDefault();
        page.classList.remove('hidden');
        home.classList.add("hidden");
        if (page.attributes['id'].value !== "home") {
          image.classList.add('hidden');
        }else{
          image.classList.remove('hidden');
        }
        container.classList.remove("active");
      }else{
        page.classList.add("hidden");
      }
    }
  })
  
}

// const titreSpans = document.querySelectorAll('h1 span');
// const btns = document.querySelectorAll('.btn-first');
// const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
// const l1 = document.querySelector('.l1');
// const l2 = document.querySelector('.l2');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    // .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    // .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    // .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(image, 1, {width: 0, ease: "power2.out"}, '-=2')
    // .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    
    

    TL.play();
})