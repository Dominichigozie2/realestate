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
        const section = document.querySelector(".hero");

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