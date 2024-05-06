const firstBtn = document.querySelector('.firstbtn');
const secondBtn = document.querySelector('.secondbtn');
const thirdBtn = document.querySelector('.thirdbtn');

const firstForm = document.querySelector('.first-form');
const secondForm = document.querySelector('.second-form');
const thirdForm = document.querySelector('.third-form');

firstBtn.addEventListener('click', () => {
    firstForm.style.display = 'block';
    secondForm.style.display = 'none';
    thirdForm.style.display = 'none';
});

secondBtn.addEventListener('click', () => {
    firstForm.style.display = 'none';
    secondForm.style.display = 'block';
    thirdForm.style.display = 'none';
});

thirdBtn.addEventListener('click', () => {
    firstForm.style.display = 'none';
    secondForm.style.display = 'none';
    thirdForm.style.display = 'block';
});

const buttons = document.querySelectorAll('.search-btn');

buttons.forEach(button => { button.addEventListener('click', () => { buttons.forEach(btn => btn.classList.remove('active')); button.classList.add('active'); }); });


   




// Open video popup when play button is clicked
document.getElementById('playButton').addEventListener('click', function() {
    document.getElementById('videoPopup').style.display = 'block';
  });
  
  // Close video popup
  function closeVideo() {
    document.getElementById('videoPopup').style.display = 'none';
    // Stop video playback (optional)
    var videoFrame = document.getElementById('videoFrame');
    var videoSrc = videoFrame.src;
    videoFrame.src = videoSrc;
  }



  var swiper = new Swiper(".mySwiperto", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2.5,
      slideShadows: true,
    },
    autoplay:{
        delay:5000,
        disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    }
  });




  const bar = document.querySelector('#bars');

  bar.addEventListener('click', () => {
    const sectionnav = document.querySelector(".home-nav");
    const nav = document.querySelector('.side-nav');
    nav.classList.toggle("active");
    bar.innerHTML = nav.classList.contains('active') ? '<span class="material-symbols-outlined">close</span>' : '<span class="material-symbols-outlined">menu</span>';

    if (nav.classList.contains('active')) {
      sectionnav.classList.add("backgroud");
    } else {
      sectionnav.classList.remove("backgroud");
    }
  })


  const nav = document.querySelector('.side-nav');
const sectionnav = document.querySelector(".home-nav");
const section = document.querySelector(".home");
console.log(sectionnav);

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries,
    appearOnScroll){
entries.forEach(entry =>{
    if(!entry.isIntersecting){
      sectionnav.classList.add("active");
    }else{
      sectionnav.classList.remove("active");
    }
})
},appearOptions);

    appearOnScroll.observe(section);