import CryptoJS from "crypto-js"

export const encryptMessage = (message, key, callback) => {
    const encryptMessage = CryptoJS.AES.encrypt(message, key).toString();
    callback(encryptMessage)
}

export const encryptMessagePromise = (message, key) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const encryptMessage = CryptoJS.AES.encrypt(message, key).toString();
            if (encryptMessage) {
                resolve(encryptMessage)
            } else {
                reject(new Error("Error to encrypt message"))
            }
        }, 2000)
    })
}


const message = {
    name: 'Azim',
    password: 'password',
}

const secretKey = 'secretkey12345'

encryptMessage(JSON.stringify(message), secretKey, (encryptedMessage) => {
    console.log(encryptedMessage)
})

encryptMessagePromise(JSON.stringify(message), secretKey)
    .then((encryptedMessage) => console.log(encryptedMessage))