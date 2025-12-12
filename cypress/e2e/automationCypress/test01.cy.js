

describe('Cypress Komutlari', () => {

    it('cy.visit komutu1', () => {

        //cy.visit('/')  // baseUrl tanimli ise kullanimi
        cy.visit('https://uitestingplayground.com') // base url tanimli degil ise kullanim sekli
        
    });

    it('cy.visit komutu2', () => {
        cy.visit('/resources')
         
    });


    it('cy.title komutlari', () => {

        cy.visit('/')  // baseUrl adresinw gider

        cy.title().should('equals' , 'UI Test Automation Playground') //title icin tam esitlik kontrolu
        cy.title().should('include', 'Test')  // istenilen String icerme durumu
        cy.title().should('contains', 'Automation') // verilen string ifadenin icerilme durumu
        
    });


   
});
