'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});

/*Получаем цену товара*/
const featuredPrice = document.querySelector('.featuredItems'); // Товары
const cartIconWrap = document.querySelector('.cartIconWrap_notАsset'); // Корзина
featuredPrice.addEventListener('click', event => {
    if (!event.target.classList.contains('button')) {
        return;
    }
    function calculateFinalPrice () {
        let finalPriceEls = basket.querySelectorAll(`.finalPrice`);
        let finalPriceHTML = basket.querySelector(`.basketTotal`);
        let finalPrice = 0;
        finalPriceEls.forEach(el => {
            el.querySelectorAll('div')[3].textContent.slice(1);
            finalPrice += +el.querySelectorAll('div')[3].textContent.slice(1); // Итоговая цена 
        });
        finalPriceHTML.innerHTML = `<div class="basketTotal"> Товаров в корзине на сумму: $ ${finalPrice} </div>`;
    }

    cartIconWrap.classList.add('cartIconWrap')
    cartIconWrap.children[1].textContent++
    const featuredItemEl = event.target.closest(".featuredItem");
    /*
    */
    const price = featuredItemEl.querySelector('.featuredPrice').textContent.trim();
    const name = featuredItemEl.querySelector('.featuredName').textContent.trim();
    const idEl = event.target.closest('.featuredItem').id;
    
    
    let divEl = cartIconWrap.querySelectorAll('.basketRow div');

    const basket = document.querySelector('.basket');
    const productId = basket.querySelector(`.productId${idEl}`);

    if (productId) {
        let quantity = productId.querySelectorAll('div')[1].textContent;
        productId.innerHTML = `<div>${name}</div>
                                      <div>${++quantity}</div>
                                      <div>${price}</div>
                                      <div>$${price.slice(1) * quantity}</div>`
        calculateFinalPrice()
        return 
    }

    let textHTML = `<div class="basketRow productId${idEl} finalPrice">
                <div>${name}</div>
                <div>1</div>
                <div>${price}</div>
                <div>${price}</div>
            </div>`;
    document.querySelector('.basketRow').insertAdjacentHTML('afterend', textHTML);
    calculateFinalPrice()
    

}); 



cartIconWrap.addEventListener('click', event => {
    document.querySelector('.basket').classList.toggle('hidden');
}
)


