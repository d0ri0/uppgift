describe('Cart', () => {

    before(function () {
        cy.visit('/cart');
    })

    it('Visits empty cart page', () => {
        cy.contains('Din varukorg är tom');
    });

    it('Visits filled cart page', () => {

        cy
        .window()
        .its('store')
        .invoke('dispatch', { type: 'GET_CART_SUCCESS', response: { Items: [{Id: 1, Quantity: 1}], Total: 63.2 } });
        
        cy.contains('Produkter i varukorgen');

        // Check that clear cart button exists
        cy.get('[data-test=clearCartButton]');

        // Check that product exists
        cy.get('.card');

    });

});
