describe('teste login', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    Topbar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: ".oxd-alert-content--error",
    correctUsername: "Admin",
    correctPassword: "admin123",
    wrongEntryTest: "Test"
  }

  it('login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(selectorsList.correctUsername)
    cy.get(selectorsList.passwordField).type(selectorsList.correctPassword)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.Topbar)
  })
  it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(selectorsList.wrongEntryTest)
    cy.get(selectorsList.passwordField).type(selectorsList.wrongEntryTest)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})