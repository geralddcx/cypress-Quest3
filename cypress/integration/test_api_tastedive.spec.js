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
            expect(result.body.Similar.Info[0].Name.toLowerCase()).to.be.equal('ABBA'.toLowerCase());
            expect(result.body.Similar.Info[0].Name.toLowerCase()).contains('ABBA'.toLowerCase());
//expect(result.body.Similar.Results.length).to.be.eq(NewSearch[0].limit);
            expect(result.body.Similar.Results.length).to.have.at.most(NewSearch[0].limit);
        })

        cy.similarSearchN(NewSearch[0].name,NewSearch[0].type, NewSearch[0].info, NewSearch[0].limit)
        .then( result => {
            cy.log(JSON.stringify(result));
            cy.log("1" + NewSearch[0].name);
            cy.log("2" + result.body.Similar.Info[0].Name.toLowerCase());
            expect(result).to.exist;
            expect(result.body.Similar).to.exist;
            expect(result.body.Similar.Info.length).to.be.gt(0);
            expect(result.body.Similar.Info[0].Name.toLowerCase()).to.be.equal(NewSearch[0].name.toLowerCase());
            expect(result.body.Similar.Info[0].Name.toLowerCase()).contains(NewSearch[0].name.toLowerCase());
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

        cy.similarSearchN(NewSearch[1].name,NewSearch[1].type, NewSearch[1].info, NewSearch[1].limit)
        .then( result => {
            cy.log(JSON.stringify(result));
            cy.log("1" + NewSearch[1].name);
            cy.log("2" + result.body.Similar.Info[0].Name.toLowerCase());
            expect(result).to.exist;
            expect(result.body.Similar).to.exist;
            expect(result.body.Similar.Info.length).to.be.gt(0);
            expect(result.body.Similar.Info[0].Name.toLowerCase()).to.be.equal(NewSearch[1].name.toLowerCase());
            expect(result.body.Similar.Info[0].Name.toLowerCase()).contains(NewSearch[1].name.toLowerCase());
//expect(result.body.Similar.Results.length).to.be.eq(NewSearch[0].limit);
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
        cy.similarSearchN(NewSearch[2].name,NewSearch[2].type, NewSearch[2].info, NewSearch[2].limit)
        .then( result => {
            cy.log(JSON.stringify(result));
            cy.log("1" + NewSearch[2].name);
            cy.log("2" + result.body.Similar.Info[0].Name.toLowerCase());
            expect(result).to.exist;
            expect(result.body.Similar).to.exist;
            expect(result.body.Similar.Info.length).to.be.gt(0);
            expect(result.body.Similar.Info[0].Name.toLowerCase()).to.be.equal(NewSearch[2].name.toLowerCase());
            expect(result.body.Similar.Info[0].Name.toLowerCase()).contains(NewSearch[2].name.toLowerCase());
//expect(result.body.Similar.Results.length).to.be.eq(NewSearch[0].limit);
            expect(result.body.Similar.Results.length).to.have.at.most(NewSearch[2].limit);
        })
    })
})