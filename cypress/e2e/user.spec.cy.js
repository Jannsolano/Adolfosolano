import userData from '../fixtures/users/user-data.json'

describe('teste login', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: ".oxd-alert-content--error",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    genericField: ".oxd-input-field-bottom-space",
    dateField: ".oxd-date-input",
    selectField: ".oxd-select-text-input"
  }
  it.only('User Info Update - sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.genericField).eq(0).find('input').clear().type('NameTest')
    cy.get(selectorsList.genericField).eq(1).find('input').clear().type('SecondnTest')
    cy.get(selectorsList.genericField).eq(2).find('input').clear().type('LastNTest')
    cy.get(selectorsList.genericField).eq(3).find('input').clear().type('idTest')
    cy.get(selectorsList.genericField).eq(4).find('input').clear().type('otheridTest')
    cy.get(selectorsList.genericField).eq(5).find('input').clear().type('DRV-14Test')
    cy.get(selectorsList.dateField).eq(0).find('input').clear().type("2000-01-05").click()
    cy.get(selectorsList.selectField).eq(0).click()
    //if {
    //  should('contain', ':nth-child(27) > span').click
    //}
    cy.get(':nth-child(27) > span').click
    //cy.get(selectorsList.genericField).eq(7)
    //cy.get(selectorsList.genericField).eq(8)
    //cy.get(selectorsList.genericField).eq(9)
    //cy.get(selectorsList.genericField).eq(11)
    //cy.get(selectorsList.genericField).eq(12)
    //cy.get(selectorsList.genericField).eq(13)
  })
  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})