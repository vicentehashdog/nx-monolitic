import { getGreeting, getMessage, getTitle, getCollapsedButton, getSidebar } from '../support/app.po';

describe('myapp', () => {
  beforeEach(() => cy.visit('/'));

  // it('should display welcome message', () => {
  //   // Custom command example, see `../support/commands.ts` file
  //   cy.login('my-email@something.com', 'myPassword');

  //   // Function helper example, see `../support/app.po.ts` file
  //   getGreeting().contains('Welcome to myapp!');
  // });

  // it('should display Message', () => {
  //   getMessage().contains('Welcome to api!');
  // });

  it('should display Ant Design Of Angular', () => {
    getTitle().contains('Ant Design Of Angular');
  });

  // it('should hide sidemenu', () => {
  //   getSidebar().should('have.ng-reflect-nz-collapsed', 'false');
  //   //getTitle().contains('Ant Design Of Angular');
  //   //getCollapsedButton().click();
  //   //getTitle().contains('Ant Design Of Angular');
  // });
});
