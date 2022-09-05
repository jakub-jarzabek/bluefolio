/// <reference types="Cypress" />
import { Input } from "./Input"

describe('Login', () => {
    beforeEach(() => {
        cy.mount(<Input placeholder="" type="password" onChange={(e)=>console.log(e)} />)
      })
      it('mounts', () => {
      })


})  