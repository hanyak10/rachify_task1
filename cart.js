let quantity = 1;

function addQuantity() {
    quantity++;console.log("2");
    document.querySelector(".quantity-text").innerText = quantity;
}

function subtractQuantity() {
    if (quantity > 1) {
        quantity--;
    }
    document.querySelector(".quantity-text").innerText = quantity;
}


function toogleButtons(){
    var button2 = document.getElementsByClassName('herobut-remove')[0];console.log('2');
    var button1 = document.getElementsByClassName('herobut')[0];console.log(button1);
    button1.classList.toggle('hidden')
    button2.classList.toggle('hidden')

}
function toogleButton(){
    var button2 = document.getElementsByClassName('herobut-remove')[1];console.log('2');
    var button1 = document.getElementsByClassName('herobut')[1];console.log(button1);
    button1.classList.toggle('hidden')
    button2.classList.toggle('hidden')

}