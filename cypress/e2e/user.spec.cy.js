import userData from '../fixtures/users/user-data.json'
import DashboardPage from '../pages/dashboardPage'
import LoginPage from '../pages/LoginPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('user tests', () => {
  it('User Info Update - sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.dashboardConfirm()
    menuPage.accessMyInfo()
    myInfoPage.usernameChanges(userData.userInfo.firstName, userData.userInfo.secondName,userData.userInfo.lastName)
    myInfoPage.userIdChanges(userData.userInfo.employeeID, userData.userInfo.otherID, userData.userInfo.driverLicense)
    myInfoPage.userOtherInfo(userData.userInfo.licenseExpDate, userData.userInfo.birthDate)
  })
})