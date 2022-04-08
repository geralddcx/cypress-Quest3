/// <reference types="cypress" />

describe('essai', () => {
    const NewSearch = require('../fixtures/tasteDiveData.json');

    it('cas pour ABBA et une limite de 10', () => {
        cy.log(NewSearch);

        cy.similarSearchQ(NewSearch[0])
        .then( result => {
            cy.log(JSON.stringify(result));
            expect(result).to.exist;
            expect(result.body.Similar).to.exist;
            expect(result.body.Similar.Info.length).to.be.gt(0);
           // expect(result.body.Similar.Info[0].Name).to.contain('ABBA');
//expect(result.body.Similar.Results.length).to.be.eq(NewSearch[0].limit);
           expect(result.body.Similar.Results.length).to.have.at.most(NewSearch[0].limit);
        })

        cy.similarSearchN(NewSearch[0].name,NewSearch[0].type, NewSearch[0].nInfo, NewSearch[0].nLimit)
        .then( result => {
            cy.log(JSON.stringify(result));
            expect(result).to.exist;
            expect(result.body.Similar).to.exist;
            expect(result.body.Similar.Info.length).to.be.gt(0);
           // expect(result.body.Similar.Info[0].Name).to.contain('ABBA');
//expect(result.body.Similar.Results.length).to.be.eq(NewSearch[0].limit);
           expect(result.body.Similar.Results.length).to.have.at.most(NewSearch[0].limit);
        })

    })
    it('cas pour The cardigans et une limite de 15', () => {
        cy.log(NewSearch);

        cy.similarSearchQ(NewSearch[1])
        .then( result => {
            cy.log(JSON.stringify(result));
            expect(result).to.exist;
            expect(result.body.Similar).to.exist;
            expect(result.body.Similar.Info.length).to.be.gt(0);
            // expect(result.body.Similar.Info[0].Name).to.deep.equal('ABBA');
//expect(result.body.Similar.Results.length).to.be.eq(NewSearch[1].limit);
            expect(result.body.Similar.Results.length).to.have.at.most(NewSearch[1].limit);
        })
    });

    it('cas pour Balavoine et une limite de 20', () => {
        cy.log(NewSearch);

        cy.similarSearchQ(NewSearch[2])
        .then( result => {
            cy.log(JSON.stringify(result));
            expect(result).to.exist;
            expect(result.body.Similar).to.exist;
            expect(result.body.Similar.Info.length).to.be.gt(0);
            // expect(result.body.Similar.Info[0].Name).to.deep.equal('ABBA');
          //  expect(result.body.Similar.Results.length).to.be.eq(NewSearch[2].limit);
            expect(result.body.Similar.Results.length).to.have.at.most(NewSearch[2].limit);
        })
    })
})