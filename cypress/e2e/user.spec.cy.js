import userData from '../fixtures/users/user-data.json'
import DashboardPage from '../pages/dashboardPage'
import LoginPage from '../pages/LoginPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

var chance= new Chance()
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

    myInfoPage.usernameChanges(chance.first(), userData.userInfo.secondName, chance.last())
    myInfoPage.userIdChanges(userData.userInfo.employeeID, chance.cpf(), userData.userInfo.driverLicense)
    myInfoPage.userOtherInfo(userData.userInfo.licenseExpDate, userData.userInfo.birthDate)
  })
})