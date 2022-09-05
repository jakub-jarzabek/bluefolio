/// <reference types="Cypress" />
import { Card } from "./Card"

describe('Card', () => {
    beforeEach(() => {
      cy.mount(<Card title='' imageUrl="" onClick={()=>{
        console.log('cat girls <3')
      }} />)
    })
    it('mounts', () => {
    })
})  