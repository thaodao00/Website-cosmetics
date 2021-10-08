let close = document.querySelector('.close-wrapper');

close.onclick = function() {
    document.querySelector('.stay-in-touch').style.display = 'none';
}

let quantityWantToBuy = document.querySelector('.quantity-buttons--number').innerText;

document.querySelector('.quantity-buttons--minus').onclick = function() {
    quantityWantToBuy >=1 ? quantityWantToBuy -= 1 : quantityWantToBuy = 0;
    document.querySelector('.quantity-buttons--number').innerText = quantityWantToBuy;
}

document.querySelector('.quantity-buttons--plus').onclick = function() {
    quantityWantToBuy = Number(quantityWantToBuy) + 1;
    document.querySelector('.quantity-buttons--number').innerText = quantityWantToBuy;
}

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.product-content__tabs-item')

const tabActive = $('.product-content__tabs-item.tabs-active')

tabs.forEach((tab, index) => {
    tab.onclick = function() {
        $('.product-content__tabs-item.tabs-active').classList.remove('tabs-active')

        this.classList.add('tabs-active')
    }
});
