import userData from '../fixtures/users/user-data.json'
import DashboardPage from '../pages/dashboardPage'
import LoginPage from '../pages/LoginPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()

describe('teste login', () => {
  it.only('User Info Update - sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.dashboardConfirm()
    dashboardPage.changePage()
    myInfoPage.usernameChanges(userData.userInfo.firstName, userData.userInfo.secondName,userData.userInfo.lastName)
    myInfoPage.userIdChanges(userData.userInfo.employeeID, userData.userInfo.otherID, userData.userInfo.driverLicense)
    myInfoPage.userOtherInfo(userData.userInfo.licenseExpDate, userData.userInfo.birthDate)
  })
  it('login - fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWrongAlert(userData.userFail.username, userData.userFail.password)
  })
})