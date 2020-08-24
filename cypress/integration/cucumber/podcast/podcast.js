/// <reference types="Cypress" />
import { After, Before, Given, And, When, Then } from "cypress-cucumber-preprocessor/steps"
import { po } from '../pageobject.js'

Given('the user is on the home page', () => {
    cy.visit(Cypress.env("homePage"))
})

When('the user clicks the podcast dropdown', () => {
    cy.get(po.PODCAST_DROPDOWN).trigger('mouseover') //need to use trigger-mouseover to simulate hover to expose menu options
})

Then('the user is navigated to the Tangentially Speaking page', () => {
    cy.url().should('include', Cypress.env("tangentiallySpeakingPage"))
})

Then('the user is navigated to the Podcast Supporter Forum page', () => {
    cy.url().should('include', Cypress.env("podcastSupporterForumPage"))
})

And('the user selects the Tangentially Speaking link', () => {
    cy.get(po.TANGENTIALLY_SPEAKING_LINK).click()
    
})

And('the user selects the Podcast Supporter Forum link', () => {
    cy.get(po.PODCAST_SUPPORTER_FORUM_LINK).click()
})