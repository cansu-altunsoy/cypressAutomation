

describe('Cypress Komutlari', () => {

    it('cy.visit komutu1', () => {

        //cy.visit('/')  // baseUrl tanimli ise kullanimi
        cy.visit('https://uitestingplayground.com') // base url tanimli degil ise kullanim sekli
        
    });

    it('cy.visit komutu2', () => {
        cy.visit('/resources')
         
    });


    it('cy.title komutlari', () => {

        cy.visit('/')  // baseUrl adresine gider

        cy.title().should('equals' , 'UI Test Automation Playground') //title icin tam esitlik kontrolu
        cy.title().should('include', 'Test')  //  title istenilen String ifadeyi iceriyor mu kontrol eder
        cy.title().should('contains', 'Automation') // verilen string ifadenin icerilme durumu
        
    });


    it('cy.url ve cy.location komutlari', () => {
 
        cy.visit('/')  // baseUrl adresine gider

        cy.url().should('equals' , 'https://uitestingplayground.com' ) // url tam esitlik kontorlu saglar
        cy.url().should('include' , 'uitestingplayground' ) // url istenilen string ifadeyi iceriyor mu kontrolu saglar
        

        
    });
   
});
