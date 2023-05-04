export const setRating = (starNumber = 5, feedback = 'feedback') => {
    cy.getByTestId(`StartRating${starNumber}`).click();
    cy.getByTestId('RatingCard.Input').type(feedback);
    cy.getByTestId('RatingCard.Accept').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRating(starCount: number, feedback: string): Chainable<void>;
        }
    }
}
