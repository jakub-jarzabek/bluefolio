/// <reference types="Cypress" />
import React from 'react'
import { Button } from './Button'
const HomeButton = '[data-testid="my_button"]'

const WrapperComponenet = () =>{
  const [color,setColor]=React.useState('red')
  return(
    <>
    <Button title="text" testID={'my_button'} onClick={() => setColor('green') } />
    <div id='testDIV' style={{backgroundColor:color, width:'10px', height:'10px'}}></div>
    </>
  )

}
describe('Button', () => {

  beforeEach(() => {
    cy.mount(
      <WrapperComponenet/>
    )
  })

  it('mounts', () => {
  })

  it('is visible', () => {
    cy.get('p.text-light-honey').should('be.visible')
  })

  it('is has displays "text"', () => {
    cy.get('p.text-light-honey').should('have.text', 'text')
  })

  it('is has spanish violet colour', () => {
    cy.get('.py-3').should('have.css', 'background-color', 'rgb(87, 50, 128)')
  })


  it('have div with red color',()=>{
    cy.get('#testDIV').should('have.css','background-color', 'rgb(255, 0, 0)')
  })

  it('Should have div with red color',()=>{
    cy.get('[data-testid="my_button"]').click()
    cy.get('#testDIV').should('have.css','background-color', 'rgb(0, 128, 0)')
  })
  })

