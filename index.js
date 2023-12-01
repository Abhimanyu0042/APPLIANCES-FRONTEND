// Reveal on Scroll

function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    for(var i = 0;i<reveals.length;i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementvisible = 150;
        if(elementTop < windowHeight - elementvisible){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll',reveal);
reveal();