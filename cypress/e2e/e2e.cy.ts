/// <reference types="Cypress" />

const url = 'http://localhost:2137'
describe('empty spec', () => {
  before(() => {
    // @ts-ignore
    cy.signIn()
  });
  after(() => {
    cy.clearLocalStorageSnapshot();
    cy.clearLocalStorage()
  });
  beforeEach(() => {
    cy.restoreLocalStorage();
  });
  afterEach(() => {
    cy.saveLocalStorage();
  })

  it('Bluefolio Homepage', () => {
    cy.visit(url)
    
    cy.get('.h-full.flex > .flex > :nth-child(1)').should('have.text', 'Kacper')
    cy.get('.h-full.flex > .flex > :nth-child(2)').should('have.text', 'Biegajło')

    cy.get('.text-4xl').should('be.visible')
    cy.get('.text-light-timber').should('include.text', 'Testeser')

    cy.get('.h-full.flex > .h-full')
    .should('have.attr', 'src', '/src/assets/blue.png')
  })
  it('has working admin options', () => {
    cy.get('.z-40 > .items-center > :nth-child(2)').click({force: true})
    cy.get('.w-full > .gap-4 > :nth-child(2)').eq(0).click()
    cy.contains("Add").click()
    cy.get(':nth-child(1) > .relative > .block').type("TestTitle")
    cy.get(':nth-child(2) > .relative > .block')
    .type("https://github.com/BlueCodeMaster3000/Java-Script-course")
    cy.get(':nth-child(3) > .relative > .block').type("https://i.imgur.com/DusTHfh.jpg")
    cy.get(':nth-child(4) > .relative > .block').type("Test cats")
    cy.get('.flex-col > .py-3').click()
    cy.get('.Toastify__toast-container').find('div').find('div')
    .contains("Pomyslnie usunieto projekt")
    .should("have.text", 'Pomyslnie usunieto projekt')
    cy.wait(200)
    cy.get('.Toastify__toast-container').find('div').find('div')
    .contains("Pomyslnie dodano projekt")
    .should("have.text", 'Pomyslnie dodano projekt')
    cy.get('.px-3').click({force: true})
  })
  context('bigger resolution', () => {
    before(() => {
      cy.viewport(1200,1000)
    })
  it('has properly working "Projects" cards', () => {
    cy.get('.py-3').click()
    cy.get('.justify-around > .z-10').should('be.visible').click()
    cy.get('.fixed > .relative > .flex-col > .text-xl')
    .should('have.text', 'TestTitle')
    cy.get('.fixed > .relative > .flex-col > .rounded')
    .should('have.attr', 'src', 'https://i.imgur.com/DusTHfh.jpg')
    cy.get('.fixed > .relative > .flex-col').should('include.text', 'cats')
  })
  })
})
