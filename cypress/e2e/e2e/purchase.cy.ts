import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

describe('SauceDemo - Purchase Flow', () => {
  const login = new LoginPage();
  const products = new ProductsPage();
  const cart = new CartPage();
  const checkout = new CheckoutPage();

  beforeEach(() => {
    cy.fixture('users').as('users');
    cy.fixture('checkout').as('checkout');
    cy.visit('/');
  });

  it('Should complete a purchase successfully', function () {

    login.validatePage();
    login.login(this.users.standard.username, this.users.standard.password);

    products.validatePage();
    products.addProducts(2);
    products.goToCart();

    cart.validatePage(2);
    cart.proceedToCheckout();

    checkout.validateCheckoutInfoPage();
    checkout.fillForm(
      this.checkout.firstName,
      this.checkout.lastName,
      this.checkout.postalCode
    );

    checkout.validateOverviewPage();
    checkout.finishPurchase();
    checkout.validateConfirmation();
  });
});