/// <reference types="Cypress" />


const url = 'http://localhost:2137'
describe('empty spec', () => {
  it('Bluefolio Homepage', () => {
    cy.visit(url)
    
    cy.get('.h-full.flex > .flex > :nth-child(1)').should('have.text', 'Kacper')
    cy.get('.h-full.flex > .flex > :nth-child(2)').should('have.text', 'Biegajło')

    cy.get('.text-4xl').should('be.visible')
    cy.get('.text-light-timber').should('include.text', 'Testeser')

    cy.get('.h-full.flex > .h-full')
    .should('have.attr', 'src', '/assets/blue.756803da.png')
  })
  context('bigger resolution', () => {
    before(() => {
      cy.viewport(1200,1000)
    })
  it('has properly working "Projects" cards', () => {
    cy.get('.py-3').click()
    cy.get('.justify-around > .z-10').should('be.visible').click()

    cy.get('.fixed > .relative > .flex-col').screenshot()

    cy.get('.fixed > .relative > .flex-col > .text-xl')
    .should('have.text', 'TestTitle')
    cy.get('.fixed > .relative > .flex-col > .rounded')
    .should('have.attr', 'src', 'https://i.imgur.com/DusTHfh.jpg')
    // cy.get('.fixed > .relative > .flex-col').should('include.text', 'cats')

    // cy.get('.flex-col > .py-3').click()
    // cy.url().should('include', 'Java-Script-course')
    // cy.go('back')
    
    

  })
})

})