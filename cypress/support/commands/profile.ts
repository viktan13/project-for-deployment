export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCardProps.FirstName').clear().type(firstname);
    cy.getByTestId('ProfileCardProps.LastName').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'adfadf' },
        body: {
            id: '3',
            name: 'test',
            lastName: 'lastname',
            age: 41,
            currency: 'USD',
            city: 'Chicago',
            username: 'testuser',
            avatar: 'https://tse3.mm.bing.net/th?id=OIP.SFHxhDKpzeiJHCHB9uam_wHaF2&pid=Api&P=0',
            country: 'USA',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
