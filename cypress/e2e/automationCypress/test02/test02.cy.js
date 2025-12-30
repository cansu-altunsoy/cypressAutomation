
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




// BeforeEach her bir it blogundan once calısan blok kullanimi ***** (İt'leri if dongusu gibi dusunur isek
//  beforeEach her donguden once calistirdigimiz for gibi dusune biliriz.)***


describe('', () => {
    beforeEach(() => {

        cy.visit('https://uitestingplayground.com')

    });
    it('title test', () => {

        cy.title().should('eq', 'uitestingplayground')
        cy.title().should('include', 'uitestingplayground')
    
    });

    it('url test', () => {

        cy.url().should('include', 'playground')
        
    });

});