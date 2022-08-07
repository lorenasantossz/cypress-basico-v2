Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Lorena')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('teste@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()

})