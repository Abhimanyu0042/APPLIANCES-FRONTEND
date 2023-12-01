const addtocart = document.getElementsByClassName("add-to-cart");

function added() {
    addtocart.innerHTML = 'Added!';
    window.alert('Woah! Your product is added to cart.✅');
}

let slideIndex = 0;
showSlides();

function showSlides(){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for(i = 0;i<slides.length;i++){
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    
    setTimeout(showSlides, 3000); 
}

// reveal animation

function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  for(var i = 0;i<reveals.length;i++){
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if(elementTop < windowHeight - elementVisible){
      reveals[i].classList.add('alive');
    }
    else{
      reveals[i].classList.remove('alive');
    }
  }

}

window.addEventListener('scroll',reveal);
reveal();

// Splide library

var splide = new Splide( '.splide', {
  perPage: 1,
  gap    : '2rem',
  breakpoints: {
    640: {
      perPage: 2,
      gap    : '.7rem',
      height : '6rem',
    },
    480: {
      perPage: 1,
      gap    : '.7rem',
      height : '6rem',
    },
  },
} );

splide.mount();