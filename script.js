const btnEl = document.querySelectorAll('.btn');
const submitEl = document.querySelector('.submit');
const changeEl = document.querySelector('.change');
const sectionEl = document.querySelector('.section-2');
const mainEl = document.querySelector('.main');

function init() {
    changeEl.innerText = `0`;
}
init();

submitEl.addEventListener ('click', function(){
    sectionEl.classList.remove('hidden');
    mainEl.classList.add('hidden');
})

btnEl.forEach(function(btn){
    btn.addEventListener('click',function(){
       changeEl.innerHTML = btn.innerHTML; 
       btn.style.backgroundColor = 'orange';
    })

})

