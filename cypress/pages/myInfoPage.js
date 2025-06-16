class MyInfoPage {

    selectorsList(){
        const selectors = {
            genericField: ".oxd-input-field-bottom-space",
            dateField: ".oxd-date-input",
            selectField: ".oxd-select-text-input",
            selectFieldResponse1: ':nth-child(27) > span',
            selectFieldResponse2: ':nth-child(3) > span',
            selectFieldResponse3: ':nth-child(3) > span',
            saveButton: "[type='submit']",
            saveSucess: ".oxd-toast-close-container"
        }

        return selectors
    }

    usernameChanges(firstName, secondName, lastName) {
        cy.get(this.selectorsList().genericField).eq(0).find('input').clear().type(firstName)
        cy.get(this.selectorsList().genericField).eq(1).find('input').clear().type(secondName)
        cy.get(this.selectorsList().genericField).eq(2).find('input').clear().type(lastName)
    }

    userIdChanges(employeeID, otherID, driverLicense) {
        cy.get(this.selectorsList().genericField).eq(3).find('input').clear().type(employeeID)
        cy.get(this.selectorsList().genericField).eq(4).find('input').clear().type(otherID)
        cy.get(this.selectorsList().genericField).eq(5).find('input').clear().type(driverLicense)
    }

    userOtherInfo(licenseExpDate, birthDate) {
        cy.get(this.selectorsList().dateField).eq(0).find('input').clear().type(licenseExpDate).click()
        cy.get(this.selectorsList().selectField).eq(0).click()
        cy.get(this.selectorsList().selectFieldResponse1).click()
        cy.get(this.selectorsList().selectField).eq(1).click()
        cy.get(this.selectorsList().selectFieldResponse2).click()
        cy.get(this.selectorsList().dateField).eq(1).find('input').clear().type(birthDate).click()
        cy.get(this.selectorsList().genericField).eq(11).click()
        cy.get(this.selectorsList().selectField).eq(2).click()
        cy.get(this.selectorsList().selectFieldResponse3).click()
        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get(this.selectorsList().saveSucess)
    }
}

export default MyInfoPage