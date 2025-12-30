
/*describe('', () => {
    it('', () => {
        
    });
}); */ //Test suiti olusturmak icin describe kullanilir
    
// contex fonk ayni islem icin kullanilabilir

context('contex Kullanimi', () => {

    it('title', () => {

        cy.visit('https://uitestingplayground.com')
        cy.title().should('include', 'playgroud')
        
    });
    
});