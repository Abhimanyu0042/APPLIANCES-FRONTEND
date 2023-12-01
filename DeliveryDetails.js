function openNav() {
    document.getElementById("myNav").style.width = "60%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


const proceedCheckout = document.querySelector('#proceed-to-checkout');
const overlaycont = document.querySelector('#overlay-cont'); 
const continueShoppingBtn = document.querySelector('.continue-shopping');
const transactionDate = document.querySelector('#real-time-date');
const emailInp = document.querySelector('#email-inp');
const fullName = document.querySelector('#full-name');
const cardNo = document.querySelector('#card-number');
const emailOrder = document.querySelector('#email-order');
const confirmPayMethod = document.querySelector('#pay-confirm-method');
const confirmOrderBtn = document.querySelector('#ConfirmOrderNow');

var currentdate = new Date(); 
if(currentdate.getMinutes() < 10)
{
    var minutes ="0"+currentdate.getMinutes();
}else{
    minutes = currentdate.getMinutes();
}
var datetime = "Ordered at: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + minutes;

confirmOrderBtn.addEventListener('click', ()=> {
    if(fullName.value == ""){
        window.alert('Please fill proper delivery details.')
    }else if(emailInp.value == ""){
        alert('Give proper email address so that we van contact you.');
    }
    else{
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
        overlaycont.style.height = '100%';
        transactionDate.innerText = datetime;
        emailOrder.innerText = emailInp.value;
        confirmPayMethod.innerText = paymentMethod;
    }  
})
             

proceedCheckout.addEventListener('click', ()=> {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    if(fullName.value == ""){
        window.alert('Please fill proper delivery details.') 
    }else if(paymentMethod != "Online-Payment"){
        alert('Please select Online Payment');
    }else if(cardNo.value == ""){
        alert('Please fill the card details');
    }
    else{
        overlaycont.style.height = '100%';
        transactionDate.innerText = datetime;
        emailOrder.innerText = emailInp.value;
        confirmPayMethod.innerText = paymentMethod;
    }   

})

continueShoppingBtn.addEventListener('click',()=> {
    window.location.href = ('index.html');
    console.log("1");
})

function closeOverlay(){
    overlaycont.style.width = '0%';
}