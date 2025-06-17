class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: ".oxd-alert-content--error",
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    loginWrongAlert(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPage