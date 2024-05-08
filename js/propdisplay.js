const bar = document.querySelector('#bars');

bar.addEventListener('click', () => {
    // const sectionnav = document.querySelector(".about-nav");
    const nav = document.querySelector('.side-nav');
    nav.classList.toggle("active");
    bar.innerHTML = nav.classList.contains('active') ? '<span class="material-symbols-outlined">close</span>' : '<span class="material-symbols-outlined">menu</span>';


})

