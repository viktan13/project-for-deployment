let profileId = '';

describe('User opens the profile page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            cy.visit(`profile/${data.id}`);
            profileId = data.id;
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('profile renders successfully', () => {
        cy.getByTestId('ProfileCardProps.FirstName').should('have.value', 'test');
        cy.getByTestId('ProfileCardProps.LastName').should('have.value', 'lastname');
    });

    it('and edits the profile', () => {
        const newFirstName = 'newFirstName';
        const newLastName = 'newLastName';
        cy.updateProfile(newFirstName, newLastName);
        cy.getByTestId('ProfileCardProps.FirstName').should('have.value', newFirstName);
        cy.getByTestId('ProfileCardProps.LastName').should('have.value', newLastName);
    });
});
