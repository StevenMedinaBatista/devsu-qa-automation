export class ProductsPage {
  private inventory = '.inventory_item';
  private addButtons = '.inventory_item button';
  private cartIcon = '.shopping_cart_link';
  private cartBadge = '.shopping_cart_badge';

  validatePage() {
    cy.url().should('include', '/inventory');
    cy.get(this.inventory).should('have.length.greaterThan', 0);
  }

  addProducts(quantity: number) {
    cy.get(this.addButtons).should('have.length.greaterThan', quantity - 1);
    cy.get(this.addButtons).each(($btn, index) => {
      if (index < quantity) cy.wrap($btn).click();
    });
    cy.get(this.cartBadge).should('contain.text', quantity);
  }

  goToCart() {
    cy.get(this.cartIcon).click();
  }
}
