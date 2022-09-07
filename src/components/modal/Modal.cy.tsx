/// <reference types="Cypress" />
import { Modal, FormModal, ProjectModal } from './Modal'

describe('Modal', () => {
    beforeEach(() => {
        cy.mount(
        <Modal setOpen={()=>null}>
            <p>test</p>
        </Modal>)
})
    it('mounts', () => {
    })
    it('is visible', () => {
        cy.get('.relative').should('be.visible')
    })
    it('has proper text', () => {
        cy.get('p').should('have.text', 'test')
      })
})

describe('FormModal', () => {
    beforeEach(() => {
        cy.mount(
        <FormModal 
        setOpen={()=>null}
        description="Test"
        title="test"
        url=""
        imageUrl=""
        testID='123'
        />)
    })
    it('mounts', () => {
    })
    it('is visible', () => {
        cy.get('.relative').should('be.visible')
    })
    it('title texbox', () => {
        cy.get('.gap-2 > :nth-child(1)').find('input')
        .type("testTITLE")
        cy.get(':nth-child(1) > .relative > .block')
        .should('have.value', 'testTITLE')
    })
    it('url texbox', () => {
        cy.get('.gap-2 > :nth-child(2)').find('input')
        .type("testURL")
        cy.get(':nth-child(2) > .relative > .block')
        .should('have.value', 'testURL')
    })
    it('descritipn texbox', () => {
        cy.get('textarea').type("testDescription")
        cy.get('textarea').should('have.value', 'testDescription')
    })
    it('button test', () => {
        cy.get('.text-light-honey').should('have.text', 'Add')
    })
})

describe('ProjectModal', () => {
    beforeEach(() => {
        cy.mount(
        <ProjectModal 
        setOpen={()=>null}
        description="Test"
        title="test"
        url=""
        imageUrl=""
        testID='123'
        />)
    })
    it('mounts', () => {
    })
    it('is visible', () => {
        cy.get('.relative').should('be.visible')
    })
    it('has proper text fields', () => {
        cy.get('.text-xl').should('have.text', 'test')
        cy.get('.text-md').should('have.text', 'Test')
    })
    it('repo button', () => {
        cy.get('.text-light-honey').should('have.text', 'Repo')
        cy.get('svg').should('be.visible')
    })
})