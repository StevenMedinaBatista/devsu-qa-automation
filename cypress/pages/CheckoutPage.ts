export class CheckoutPage {
  private firstName = '#first-name';
  private lastName = '#last-name';
  private postalCode = '#postal-code';
  private continueBtn = '#continue';
  private finishBtn = '#finish';
  private confirmation = '.complete-header';

  validateCheckoutInfoPage() {
    cy.url().should('include', 'checkout-step-one');
    cy.get(this.firstName).should('be.visible');
    cy.get(this.lastName).should('be.visible');
    cy.get(this.postalCode).should('be.visible');
  }

  fillForm(first: string, last: string, zip: string) {
    cy.get(this.firstName).type(first);
    cy.get(this.lastName).type(last);
    cy.get(this.postalCode).type(zip);
    cy.get(this.continueBtn).click();
  }

  validateOverviewPage() {
    cy.url().should('include', 'checkout-step-two');
    cy.get(this.finishBtn).should('be.enabled');
  }

  finishPurchase() {
    cy.get(this.finishBtn).click();
  }

  validateConfirmation() {
    cy.url().should('include', 'checkout-complete');
    cy.get(this.confirmation)
      .should('be.visible')
      .and('contain.text', 'Thank you for your order!');
  }
}
