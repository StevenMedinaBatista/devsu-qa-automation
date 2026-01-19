export class LoginPage {
  private username = '#user-name';
  private password = '#password';
  private loginBtn = '#login-button';
  private logo = '.login_logo';

  validatePage() {
    cy.get(this.logo).should('be.visible');
    cy.url().should('include', 'saucedemo');
  }

  login(user: string, pass: string) {
    cy.get(this.username).should('be.visible').type(user);
    cy.get(this.password).should('be.visible').type(pass);
    cy.get(this.loginBtn).should('be.enabled').click();
  }
}
