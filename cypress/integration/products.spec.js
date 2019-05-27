describe('Products', () => {

    before(function () {
        cy.visit('/products');
    })

    it('Visits products page', () => {
        cy.contains('Alla våra produkter');
    });

    it('Increasess & Decrese amount of items', () => {

        cy.get('.card').first().as('productItem');

        cy.get('@productItem').find('[data-test=incrementProductAmount]').click();
        cy.get('@productItem').find('[data-test=productAmount]').should('have.value', '2');
        cy.get('@productItem').find('[data-test=decrementProductAmount]').click();
        cy.get('@productItem').find('[data-test=productAmount]').should('have.value', '1');

    });

    it('Clicks add to cart', () => {
        cy.contains('Lägg i varukorg').as('addToCartButton');
        cy.get('@addToCartButton').click();
        cy.get('@addToCartButton').contains('Lägger till');
    });


});
