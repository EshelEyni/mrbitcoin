import { storageService } from "./storage.service"

export const userService = {
    getUser,
    signup,
    login,
    logout,
    getLoggedinUser,
    updateUser
}

function getUser() {
    return new Promise((resolve, reject) => {
        const loggedinUser = storageService.loadFromStorage('loggedinUser')
        resolve(loggedinUser)
    })
}

function signup(user) {
    storageService.saveToStorage('loggedinUser', user)
    saveLocalUser(user)
}

function login(user) {
    const loggedinUser = storageService.loadFromStorage('loggedinUser')
    if (user.name === loggedinUser.name) {
        saveLocalUser(loggedinUser)
        return loggedinUser
    }
}

function logout() {
    sessionStorage.clear()
}

function updateUser(user) {
    storageService.saveToStorage('loggedinUser', user)
    saveLocalUser(user)
}


function saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser'))
}

