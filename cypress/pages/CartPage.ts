export class CartPage {
  private cartItems = '.cart_item';
  private checkoutBtn = '#checkout';

  validatePage(expectedItems: number) {
    cy.url().should('include', '/cart');
    cy.get(this.cartItems).should('have.length', expectedItems);
    cy.get(this.checkoutBtn).should('be.enabled');
  }

  proceedToCheckout() {
    cy.get(this.checkoutBtn).click();
  }
}
