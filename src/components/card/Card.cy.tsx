/// <reference types="Cypress" />
import { Card } from "./Card"

describe('Card', () => {
    beforeEach(() => {
      cy.mount(<Card title='testTitle' imageUrl="" onClick={()=>{
      }} />)
    })
    it('mounts', () => {
    })
    it('is visible', () => {
      cy.get('.w-80').should('be.visible')
    })
    it('should have proper title', () => {
      cy.get('.font-semibold').should('have.text', 'testTitle')

    })
})  