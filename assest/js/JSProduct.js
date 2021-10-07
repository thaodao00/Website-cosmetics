var close = document.querySelector('.close-wrapper');

close.onclick = function(e) {
    document.querySelector('.stay-in-touch').style.display = 'none';
}

var quantityWantToBuy = document.querySelector('.quantity-buttons--number').innerText;

document.querySelector('.quantity-buttons--minus').onclick = function(e) {
    quantityWantToBuy >=1 ? quantityWantToBuy -= 1 : quantityWantToBuy = 0;
    document.querySelector('.quantity-buttons--number').innerText = quantityWantToBuy;
}

document.querySelector('.quantity-buttons--plus').onclick = function(e) {
    quantityWantToBuy = Number(quantityWantToBuy) + 1;
    document.querySelector('.quantity-buttons--number').innerText = quantityWantToBuy;
}
