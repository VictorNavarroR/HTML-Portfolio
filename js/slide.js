const slideImages = document.querySelectorAll('.work__img');
const slideContents = document.querySelectorAll('.work__content');

const imagesCount = slideImages.length;
let counter = 0;



/* navigation */
const prevBtn = document.querySelector('._prev');
const nextBtn = document.querySelector('._next');


if(counter  == 0) {
    prevBtn.style.color = '#ccc';
}

/* actions */
slideImages[counter].style.zIndex = 1;
slideContents[counter].style.display = "block";

nextBtn.addEventListener('click', () => {
    prevBtn.style.color = '#457FB7';
    if(counter == imagesCount -1) {
        return;
    }
    slideImages.forEach( elem => {
        elem.style.display = "none";
        slideContents[counter].style.display = "none";
        slideImages[counter].classList.remove('animate__fadeIn');
    })
    counter += 1;
    slideImages[counter].style.display = "block";
    slideContents[counter].style.display = "block";
    slideImages[counter].classList.add('animate__fadeIn');
    if(counter == imagesCount -1) {
        nextBtn.style.color = '#ccc';
    }
})

prevBtn.addEventListener('click', () => {
    nextBtn.style.color = '#457FB7';
    if(counter  == 0) {
        return;
    }
    slideImages.forEach( elem => {
        elem.style.display = "none";
        slideContents[counter].style.display = "none";
        slideImages[counter].classList.remove('animate__fadeIn');
    })
    counter -= 1;
    slideImages[counter].style.display = "block";
    slideContents[counter].style.display = "block";
    slideImages[counter].classList.add('animate__fadeIn');
    if(counter  == 0) {
        prevBtn.style.color = '#ccc';
    }
})