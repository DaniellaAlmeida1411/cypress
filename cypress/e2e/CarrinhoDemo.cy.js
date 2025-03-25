describe('Carrinho', () => {
    it('Verificando se contem produtos', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain', 'Products')
        cy.get('.product_label').click()
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
        cy.get('.fa-layers-counter').should('have.text', '3')
        cy.get(':nth-child(1) > .pricebar > .btn_secondary').click()
        cy.get('.fa-layers-counter').should('have.text', '2')
        cy.visit('https://www.saucedemo.com/v1/cart.html') 
        cy.get('.btn_action').click()
        
    
      
        

    });
});
