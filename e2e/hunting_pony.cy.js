describe('Оформление заказа на huntingpony.ru', function() {
    it('Добавление товаров в корзину и оформление заказа', function() {
        cy.visit('https://huntingpony.com/');
        cy.wait(5000);
        cy.get('[data-index="0"] > .header__collections-controls > .header__collections-link').click(); //выбираю раздел "Сумки и автокресла"
        cy.wait(5000);
        cy.get('[data-product-id="338933151"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click(); //захожу в карточку первого товара
        cy.wait(5000);
        cy.get('.add-cart-counter__btn').click(); //добавляю товар в корзину
        cy.wait(5000);
        cy.get('[data-add-cart-counter-plus=""]').click(); //увеличиваю количество товара 
        cy.wait(5000);
        cy.get('.header__cart').click(); //перехожу в корзину
        cy.wait(5000);
        cy.get('.cart-controls > .button').click(); // нажимаю оформить товар
        cy.wait(5000);
        cy.contains('Оформление заказа');


    })

})