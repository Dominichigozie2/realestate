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