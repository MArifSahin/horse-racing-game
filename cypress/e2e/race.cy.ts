/// <reference types="cypress" />

describe('Horse Racing Game', () => {
    beforeEach(() => {
      cy.visit('/')
      // Wait for the page to be fully loaded
      cy.get('h1').should('contain', 'Horse Racing Game')
      cy.get('button').should('be.visible')
    })

    it('loads the page and generates the race schedule', () => {
        // Click generate program button
        cy.contains('GENERATE PROGRAM').click()

        // Verify race schedule is displayed
        cy.get('.bg-blue-500').should('be.visible')
        cy.contains('Program').should('be.visible')

        // Wait for schedule to be generated and ensure it's scrollable
        cy.get('.p-4.space-y-6').should('be.visible')
        
        // Verify at least one round is generated
        cy.get('.bg-white.rounded-xl').should('have.length.at.least', 1)

        // Verify each round has correct structure
        cy.get('.bg-white.rounded-xl').each(($round) => {
            // Scroll the round into view
            cy.wrap($round).scrollIntoView({ duration: 0 })
            
            // Check round header
            cy.wrap($round).find('.bg-blue-600').should('be.visible')
            cy.wrap($round).find('.bg-blue-600').should('contain', 'LAP')
            cy.wrap($round).find('.bg-blue-600').should('contain', 'm')

            // Check table structure
            cy.wrap($round).find('table').should('be.visible')
            cy.wrap($round).find('thead').should('be.visible')
            cy.wrap($round).find('th').should('have.length', 2)
            cy.wrap($round).find('th').first().should('contain', 'Position')
            cy.wrap($round).find('th').last().should('contain', 'Name')

            // Check at least one horse is listed
            cy.wrap($round).find('tbody tr').should('have.length.at.least', 1)
        })
    })
})
  