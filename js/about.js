

document.getElementById('playButton2').addEventListener('click', function() {
    var videoFrame = document.getElementById('videoFrame2');
    var videoSrc = '../photo/47963416.mp4';  // Replace VIDEO_ID with your video ID
    videoFrame.src = videoSrc;
    document.getElementById('videoPopup2').style.display = 'block';
  });
  
  function closeVideo() {
    var videoPopup = document.getElementById('videoPopup2');
    videoPopup.style.display = 'none';
    
    var videoFrame = document.getElementById('videoFrame2');
    videoFrame.src = '';  // Clear the src attribute to stop the video
  }





        const bar = document.querySelector('#about-bars');

        bar.addEventListener('click', () => {
            const sectionnav = document.querySelector(".about-nav");
            const nav = document.querySelector('.about-side-nav');
            nav.classList.toggle("active");
            bar.innerHTML = nav.classList.contains('active') ? '<span class="material-symbols-outlined">close</span>' : '<span class="material-symbols-outlined">menu</span>';

            if (nav.classList.contains('active')) {
            sectionnav.classList.add("backgroud");
            } else {
            sectionnav.classList.remove("backgroud");
            }
        })


        const nav = document.querySelector('.about-side-nav');
        const sectionnav = document.querySelector(".about-nav");
        const section = document.querySelector(".about-hero");

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