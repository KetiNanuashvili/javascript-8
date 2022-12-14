//slider
let data = [
    {
        id: 1,
        imageUrl:  "./images/1.jpg",
        title: "slide title 1",
      },
      {
        id: 2,
        imageUrl:
          "./images/2.jpg",
        title: "slide title 2",
      },
      {
        id: 3,
        imageUrl:
        "./images/3.jpg",
        title: "slide title 3",
      },
      {
        id: 4,
        imageUrl:
        "./images/4.jpg",
        title: "slide title 4",
      },
];


const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const sliderContent = document.getElementById("slider-content");
let dotsChildElement = document.getElementsByClassName('child');
let sliderIndex = 0;

function createDivTag(item){
    const divtag = document.createElement('div');
    divtag.classList.add('slide');

    return divtag;
}

function createImgTag(item){
    const tagImage= document.createElement('img');
    tagImage.setAttribute('src', item.imageUrl);
    tagImage.setAttribute('alt', item.title);
    tagImage.classList.add('image-slider');

    
    return tagImage
}

function createH3Tag(item){
    const h3title=document.createElement('h3');
    h3title.innerHTML = item.title;

    return h3title
}

function createDots(){
    const dots = document.createElement('div');
    dots.classList.add('dots-parent');

    data.forEach(element => {
        const childDot =document.createElement('div')
        childDot.classList.add('child');
        childDot.setAttribute('data-id', element.id -1);
        dots.appendChild(childDot);

        childDot.addEventListener('click', function(){
          let id = event.target.getAttribute('data-id');
          sliderIndex = id;
          setSlide();
        })
    });

    return dots;
}

function setSlide(){
    sliderContent.innerHTML ="";
   const slideItem =createDivTag(data[sliderIndex]);
   const imgTag = createImgTag(data[sliderIndex]);
   const titleSlider = createH3Tag(data[sliderIndex]);
   const dots = createDots();

   slideItem.appendChild(imgTag);
   slideItem.appendChild(titleSlider);
   sliderContent.appendChild(slideItem);
   sliderContent.appendChild(dots);

   currentDotActive();
}
function currentDotActive (){
  dotsChildElement[sliderIndex].classList.add('activeDot');
}

function arrowLeftClick(){
    if (sliderIndex == 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
      }
      sliderIndex -= 1;
      setSlide();
}
function arrowndRightClick(){
    if (sliderIndex == data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
      }
      sliderIndex += 1;
      setSlide();
}

arrowLeft.addEventListener('click', arrowLeftClick);
arrowRight.addEventListener('click', arrowndRightClick);

setInterval( () =>{
    arrowndRightClick();
}, 4000)

setSlide();

