export function getSlider(images){

const slides = document.getElementById('slides');
const prev = document.getElementById('prevBut');
const next = document.getElementById('nextBut');

    images.forEach( (obj, index) =>{

    var slide = document.createElement('a');

    slide.href = `${obj.href}`;

    slide.innerHTML = `<img id=slide${index} src="img/${obj.imgName}"></img>`;

    slides.insertAdjacentElement('afterbegin', slide);
    
})

    let img0 = document.getElementById("slide0");
    let img1 = document.getElementById("slide1");
    let img2 = document.getElementById("slide2");

    let i = 0;

    img0.style.display= 'block';
    img1.style.display= 'none';
    img2.style.display= 'none';
    
    prev.addEventListener('click', () =>{

        document.getElementById(`slide${i}`).style.display = 'none';
        i === 0 ? i = 2 : i--
        document.getElementById(`slide${i}`).style.display = 'block';
    })
    next.addEventListener('click', () =>{

        document.getElementById(`slide${i}`).style.display = 'none';
        i++
        i > 2 ? i = 0 : i
        document.getElementById(`slide${i}`).style.display = 'block';

    })
}