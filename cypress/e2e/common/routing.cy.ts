import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('when the user is not logged in', () => {
        it('go to the Main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('open the Profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('try to open non-existing page', () => {
            cy.visit('/profileasdf');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('when the user is logged in', () => {
        beforeEach(() => {
            cy.login('admin', '123');
        });

        it('open the Profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('open the Articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
