describe('User opens the page with the Articles list', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });

    it('and articles render successfully', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should(
            'have.lengthOf.greaterThan',
            3,
        );
    });

    it('on stabs (fixtures)', () => {
        cy.intercept('GET', 'articles?', { fixture: 'articles.json' });
        cy.getByTestId('ArticleListItem').should(
            'have.lengthOf.greaterThan',
            3,
        );
    });

    it.skip('example of the skipped test', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should(
            'have.lengthOf.greaterThan',
            3,
        );
        cy.getByTestId('afasdffa').should('exist');
    });
});
