let currentArticleId = '';

describe('User opens the page with the article', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('and article renders successfully', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });

    it('and recommendations list renders successfully', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });

    it('and can leave comments', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
        cy.getByTestId('CommentCard.Content').contains('text');
    });

    it('and gives a rating to the article', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRating(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });

    it('and gives a rating to the article using stabs (fixtures)', () => {
        cy.intercept('GET', 'articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRating(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
