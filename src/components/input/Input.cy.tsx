/// <reference types="Cypress" />
import { Input } from "./Input"
const passwordBox = '[data-testid="passwordInput"]'
const textBox = '[data-testid="textInput"]'
const textAreaBox = '[data-testid="textAreaInput"]'

describe('Password input', () => {
    beforeEach(() => {
        cy.mount(<Input 
            testID="passwordInput" 
            placeholder="Password" 
            type="password" 
            onChange={(e)=>console.log(e)} />)
      })
      it('mounts', () => {
      })
      it('is visible', () => {
        cy.get(passwordBox).should('be.visible')
      })
      it('have the correct attributes', () => {
        cy.get(passwordBox).should('have.attr', 'placeholder', 'Password')
        cy.get(passwordBox).should('have.attr', 'type', 'password')
      })
      it("allows you to type in password", () => {
        cy.get(passwordBox).type("Kacper")
        cy.get(passwordBox).should('have.value', 'Kacper')
      })
      it("allows you to clear password", () => {
        cy.get(passwordBox).clear
        cy.get(passwordBox).should('have.value', '')
      })
})  
describe('Text input', () => {
    beforeEach(() => {
        cy.mount(<Input 
            testID="textInput" 
            placeholder="Text" 
            type="text" 
            onChange={(e)=>console.log(e)} />)
      })
      it('mounts', () => {
      })
      it('is visible', () => {
        cy.get(textBox).should('be.visible')
      })
      it('have the correct attributes', () => {
        cy.get(textBox).should('have.attr', 'placeholder', 'Text')
        cy.get(textBox).should('have.attr', 'type', 'text')
      })
      it("allows you to type in text", () => {
        cy.get(textBox).type("Michał")
        cy.get(textBox).should('have.value', 'Michał')
      })
      it("allows you to clear text", () => {
        cy.get(textBox).clear
        cy.get(textBox).should('have.value', '')
      })
})
describe('Textarea input', () => {
    beforeEach(() => {
        cy.mount(<Input 
            testID="textAreaInput" 
            placeholder="Type here" 
            type="textarea" 
            onChange={(e)=>console.log(e)} />)
      })
      it('mounts', () => {
      })
      it('is visible', () => {
        cy.get(textAreaBox).should('be.visible')
      })
      it('have the correct attributes', () => {
        cy.get(textAreaBox).should('have.attr', 'placeholder', 'Type here')
      })
      it("allows you to type in text", () => {
        cy.get(textAreaBox).type("Fajne \ntesty\nsą")
        cy.get(textAreaBox).should('have.value', 'Fajne \ntesty\nsą')
      })
      it("allows you to clear text", () => {
        cy.get(textAreaBox).clear
        cy.get(textAreaBox).should('have.value', '')
      })
})