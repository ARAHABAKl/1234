"use strict"
//==========================================

// Вывод ошибки
export function showErrorMessage(message) {
    const h1 = document.querySelector('.wrapper h1')
    const msg = 
        `<div class="error">
            <p>${message}</p>
            <p><a href="/">Перейти к списку товаров!</a></p>
        </div>`;
    h1.insertAdjacentHTML('afterend', msg);
}

// Получение id из LS
export function getBasketLocalStorage() {
    const cartDataJSON = localStorage.getItem('basket');
    return cartDataJSON ? JSON.parse(cartDataJSON) : [];
}

// Запись id товаров в LS
export function setBasketLocalStorage(basket) {
    const basketCount = document.querySelector('.basket__count');
    localStorage.setItem('basket', JSON.stringify(basket));
    basketCount.textContent = basket.length;
}

// Проверка, существует ли товар указанный в LS 
//(если например пару дней не заходил юзер, а товар, который у него в корзине, уже не существует)
export function checkingRelevanceValueBasket(productsData) {
    const basket = getBasketLocalStorage();

    basket.forEach((basketId, index) => {
        const existsInProducts = productsData.some(item => item.id === Number(basketId));
        if (!existsInProducts) {
            basket.splice(index, 1);
        }
    });

    setBasketLocalStorage(basket);
}

export function hideCartCountIfEmptyBasket() {
    const cartCountElement = document.querySelector(".basket__count");
    const basketData = getBasketLocalStorage();

    if (basketData.length === 0) {
        cartCountElement.style.visibility = "hidden";
    } else {
        cartCountElement.style.visibility = "visible";
    }
}

function updateCounter() {
    const cartCountElement = document.querySelector(".basket__count");
    const basketData = getBasketLocalStorage();

    if (cart.length > 0) {
        counter.style.display = "inline-block"; // если в корзине есть товары, делаем счетчик видимым
    } else {
        counter.style.display = "none"; // если корзина пуста, делаем счетчик невидимым
    }
}