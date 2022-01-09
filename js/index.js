/* header animations */
const logo = document.querySelector(".logo__img");
logo.addEventListener('mouseleave', (e) => {
    e.target.classList.remove("animate__animated", "animate__tada");
})
logo.addEventListener('mouseover', (e) => {
    e.target.classList.add("animate__animated", "animate__tada");
})

/* end header animations */

/* on scroll */
window.addEventListener('scroll',() => {
    const toTop = document.querySelector('.top');
    if(window.scrollY > 200) {
        toTop.style.opacity = 1;
    } else {
        toTop.style.opacity = 0;
    }
});
/* end on scroll */

/* pop up creation */
const divImgs = document.querySelectorAll('.work__img');    

divImgs.forEach( img => {
    img.addEventListener('click', (e) => {
        const popUp = document.createElement('div');
        const close = document.createElement('div');
        close.innerHTML = '<i class="fas fa-times"></i>';
        close.classList.add('closePop');
        popUp.classList.add('popUp');
        popUp.innerHTML = `<img src="${e.target.src}">`;
        popUp.appendChild(close);
        document.body.appendChild(popUp);
        popUp.classList.add('animate__animated', 'animate__flipInX');
    });
});


document.addEventListener('click',function(e){
    if(e.target && e.target.parentNode.className == 'closePop'){
        const popUp = document.querySelector('.popUp');
           popUp.classList.add('animate__animated', 'animate__flipOutX');
           setTimeout(()=>{
                popUp.remove();
           }, 500);
           
        }
});



/* end pop up */
