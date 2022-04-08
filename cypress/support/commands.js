// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('countriesCoronaSearch', (query, page, limit) => {
    cy.request({
        url: 'https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search',
        qs: {
            search: query,
            page: page,
            limit: limit
        }
    }) 
}) 

Cypress.Commands.add('similarSearchN', (sName, sType, nInfo, nLimit) => {
   // cy.request('https://tastedive.com/api/similar?q='+sName+'&type='+sType+'&limit='+nLimit+'&info='+nInfo+'&k=435163-testapi-GMXUXISO');     

    cy.request({
        url: '/api/similar',
        qs: {
            q: sName,
            type: sType,
            info: nInfo,
            limit: nLimit
        }
    }) 
}) 

Cypress.Commands.add('similarSearch', (sName, sType, nInfo, nLimit) => {
    cy.request('https://tastedive.com/api/similar?q='+sName+'&type='+sType+'&limit='+nLimit+'&info='+nInfo+'&k=435163-testapi-GMXUXISO');     
}) 

Cypress.Commands.add('similarSearchQ', (query) => {
    cy.request(`https://tastedive.com/api/similar?q=${query.name}&type=${query.type}&limit=${query.limit}&info=${query.info}&k=435163-testapi-GMXUXISO`);     
}) 