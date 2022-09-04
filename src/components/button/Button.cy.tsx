/// <reference types="Cypress" />
import { Button } from './Button'
describe('Button', () => {
  it('mounts', () => {
    // @ts-ignore
    cy.mount(<Button title="xdd" onClick={() => null} />)
  })
})
