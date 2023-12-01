const sub = document.getElementById("diff");
const add = document.getElementById("add");
const quantinp = document.getElementById("inp-quantity");
let count = 1;

sub.addEventListener('click' , () => {
    if(count > 1){
        count--;
    }
    else{
        count = 1;
    }
    updateCount();
} )

add.addEventListener("click" ,() => {
    if(count < 10){
        count++;
    }
    updateCount();
})

function updateCount(){
    quantinp.innerText = count;
}

// Comment Section

var reviewInp = document.querySelector('#review-inp');
const postBtn = document.querySelector('#post-review');
const reviewBox = document.querySelector('#review-box');
const username = document.querySelector('#user-name');
const ratings = document.querySelector('#ratings');
const profilepic = document.querySelector('#profile-pc');

postBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const userInput = reviewInp.value;
    const userName = username.value;
    console.log(userName);
    const pfp = userName.charAt(0);
    var Rating = ratings.value; 

    if(userName.length == 0){
        alert("Enter a valid username.")
    }
    if(Rating > 5){
        alert('Please rate from 0 to 5 only');
        clearit();
    }
    if(Rating == 1){
        Rating = '⭐';
    }else if(Rating == 2){
        Rating = '⭐⭐';
    }else if(Rating == 3){
        Rating = '⭐⭐⭐';
    }else if(Rating == 4){
        Rating = '⭐⭐⭐⭐';
    }else if(Rating == 5){
        Rating = '⭐⭐⭐⭐⭐';
    }


    if(userName.length == 0 && userInput.length == 0 || Rating < 6){
        alert("Please write something before posting review");
    }
    else{
        const newEle = document.createElement('div');
        newEle.innerHTML = `            <div class="user-details"> <div class="profile-pc" id="profile-pc">${pfp}</div> <p class="user-name">${userName}</p> </div>
        <p class="review">${userInput}</p>
        <hr>
        <p><span class="ratings">${Rating}</span></p>`;
        newEle.classList.add('comments');
        reviewBox.insertAdjacentElement("afterbegin",newEle);
        clearit();
    }
    
})

function clearit(){
    reviewInp.value = '';
    username.value = '';
    ratings.value = '';

}

// Image scroll

const picturescroll = document.querySelector('#lhs-pic-cont');
const leftpicbtn = document.querySelector('#leftpicchange');
const rightpicbtn = document.querySelector('#rightpicchange');

const images = ['https://m.media-amazon.com/images/I/71T5NVOgbpL._SX679_.jpg',
'https://m.media-amazon.com/images/I/618-4t3xcbL._SX679_.jpg',
'https://m.media-amazon.com/images/I/71qK2dh4o0L._SX679_.jpg',
'https://m.media-amazon.com/images/I/71dKjvLPkAL._SX679_.jpg',
]
let i = 0;
const n = images.length;

rightpicbtn.addEventListener("click", ()=> {
    if(i < n){
        i++;
        picturescroll.style.backgroundImage = `url(${images[i]})`;
    }
    if(i > n-1){
        i = 0;
        picturescroll.style.backgroundImage = `url(${images[i]})`;
    }
})

leftpicbtn.addEventListener('click', () => {
    if(i > 0){
        i--;
        picturescroll.style.backgroundImage = `url(${images[i]})`;
    }
    else if(i <= 0){
        i = n-1;
        picturescroll.style.backgroundImage = `url(${images[i]})`;
        
    }
})

// Add to cart pop-up
const addtocart = document.querySelector('#add-cartbtn');
const overlaycont = document.querySelector('#overlay-cont'); 
const yesbtnoverlay = document.querySelector('#yes-btn-overlay');
const nobtnoverlay = document.querySelector('#no-btn-overlay');

addtocart.addEventListener('click', ()=> {
    overlaycont.style.width = '100%';
})

yesbtnoverlay.addEventListener('click',()=> {
    overlaycont.style.width = '0%';
    window.alert('Your product is added into the cart');
})

function closeOverlay(){
    overlaycont.style.width = '0%';
}

// Buy-now cart pop-up
const buynow = document.querySelector('#buynowbtn');
const overlaycont2 = document.querySelector('#overlay-cont2');
const confirmorder = document.querySelector('#confirm-order');
const producttitle = document.querySelector('#product-title');
const productcost = document.querySelector('#product-cost');
const cartTitle = document.querySelector('#cart-item-title');
const cartId = document.querySelector('#cart-item-id');
const cartPrice = document.querySelector('#cart-item-price');
const itemQuantity = document.querySelector('#item-quantity');
const orderSubtotal = document.querySelector('#order-subtotal');
const total = document.querySelector('#order-total');
const orderDisc = document.querySelector('#order-disc');
const discountcpn = document.querySelector('#coupon-inp');
const cpnapplybtn = document.querySelector('#cpn-btn');
const cartPic = document.querySelector('#cart-pic');
const fname = document.querySelector('#full-name');


buynow.addEventListener('click' ,()=> {
    cartPic.style.backgroundImage = `url(${images[0]})`;
    cartPrice.innerText = productcost.innerText;
    cartTitle.innerText = producttitle.innerText;
    cartId.innerText = "#XY" +  Math.floor(Math.random()*100000);
    itemQuantity.innerText = quantinp.innerText;

    let price1 = productcost.innerText;
    price1 = price1.replaceAll(',','');
    let quant = quantinp.innerText; 
    let result = price1 * quant;
    orderSubtotal.innerText = result;

    let result2 = result + 40;
    total.innerText = result2; 

    overlaycont2.style.width = '100%';
})

let cpnUsed = false;

cpnapplybtn.addEventListener('click',()=>{
    let discountCode = "summerbonanza";
    let discInp = discountcpn.value;
    if(discInp.localeCompare(discountCode) == 0 && cpnUsed == false){
        orderDisc.innerText = '1299';
        window.alert('Coupon Code applied!');
        let result3 = total.innerText - orderDisc.innerText;
        total.innerText = result3;
        discountcpn.value = '';
    }else if(discInp.localeCompare(discountCode) == 0 && cpnUsed == true){
        window.alert("Coupon Code already used!");
        discountcpn.value = '';
    }
    else if(discInp.localeCompare(discountCode) != 0){
        window.alert("Invalid Coupon Code!");
        discountcpn.value = '';
    }
})

confirmorder.addEventListener('click', ()=> {
    if(orderDisc.innerText == '1299'){
        cpnUsed = true;
    }
    if(fname.value.length != 0){
        window.alert(`Yipee! Your order is confirmed with OrderId: ${cartId.innerText} `);
        overlaycont2.style.width = '0%';
        orderDisc.innerText = '0';
    }
    else{
        window.alert('Please enter your delivery details')
    }
})

function closeOverlay2(){
    overlaycont2.style.width = '0%';
    orderDisc.innerText = '0';
}

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