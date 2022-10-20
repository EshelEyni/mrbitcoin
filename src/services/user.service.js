export const userService = {
    getUser,
}


function getUser() {
    return new Promise((resolve, reject) => {
        resolve(user)
    })
}

const user = {
    name: "Eshel Eyni",
    balance: 100,
    transactions: []
}
