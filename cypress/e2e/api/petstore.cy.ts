describe('PetStore API', () => {
  const baseUrl = 'https://petstore.swagger.io/v2';

  it('Complete pet lifecycle', () => {
    cy.fixture('pet').then((pet) => {

      // Create pet
      cy.request('POST', `${baseUrl}/pet`, pet).then((res) => {
        expect(res.status).to.eq(200);
      });

      // Get by ID
      cy.request(`${baseUrl}/pet/${pet.id}`).its('status').should('eq', 200);

      // Update pet
      cy.request('PUT', `${baseUrl}/pet`, {
        ...pet,
        name: 'DoggieUpdated',
        status: 'sold'
      }).its('status').should('eq', 200);

      // Get by status
      cy.request(`${baseUrl}/pet/findByStatus?status=sold`)
        .its('status')
        .should('eq', 200);
    });
  });
});
