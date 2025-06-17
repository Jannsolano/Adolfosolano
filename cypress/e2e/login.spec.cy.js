import userData from '../fixtures/users/user-data.json'
import DashboardPage from '../pages/dashboardPage'
import LoginPage from '../pages/LoginPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('login - Success', () => {
  it('User Info Update - sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.dashboardConfirm()
  })
  it('login - fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWrongAlert(userData.userFail.username, userData.userFail.password)
  })
})