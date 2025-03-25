describe('Login', () => {
    it('Login com sucesso', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain','Products')
        cy.screenshot('logado')
    });
    
it('Login com senha inválida', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('erro')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    cy.screenshot('mensagem de erro')
    });

it('Login com usuário inválido', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_use')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    cy.screenshot('mensagem de erro usuário')
    });

it('Login utiizando símbolos no username', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standart_user1')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    cy.screenshot('mensagem de erro nome de usuário com numeral')
   

});

it('Login com nome de usuário em branco', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').clear() 
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')
    cy.screenshot('login usuario em branco')   

})





});