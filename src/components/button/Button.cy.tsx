/// <reference types="Cypress" />
import { Button } from './Button'

describe('Button', () => {
  it('mounts', () => {
    cy.mount(<Button title="xdd" onClick={() => null} />)
  })
})
