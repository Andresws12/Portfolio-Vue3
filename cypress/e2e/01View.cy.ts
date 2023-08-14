import sectionHomePage from './utilities/home/home.selectors';

describe('01 View', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('01 Login with wrong credentials and failure login', () => {
    cy.get(sectionHomePage.sectionHomePage).should('be.visible');
  });
});
