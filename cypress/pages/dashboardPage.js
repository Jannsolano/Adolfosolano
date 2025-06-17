class DashboardPage {

    selectorsList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
            
        }

        return selectors
    }

    dashboardConfirm() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid)
    }

    changePage() {
        
    }
    

}

export default DashboardPage