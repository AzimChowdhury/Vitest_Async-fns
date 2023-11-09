import CryptoJS from "crypto-js";
import { expect, it, beforeAll, afterAll, beforeEach, afterEach } from "vitest";
import { encryptMessage, encryptMessagePromise } from "./async";


beforeAll(() => {
    console.log('beforeAll');
})

beforeEach(() => {
    console.log('beforeEach');
})

afterEach(() => {
    console.log("afterEach");
})
afterAll(() => {
    console.log("afterAll");
})




it("should encrypt a message", async () => {
    const message = "Azim"
    const secretKey = 'secretkey12345'
    const encryptedData = await new Promise((resolve, reject) => {
        encryptMessage(message, secretKey, (message) => {
            resolve(message)
        })
    })
    expect(encryptedData).toBeDefined()
})

it("should encrypt a message with promise", async () => {
    const message = "Azim"
    const secretKey = 'secretkey12345'
    const encryptedData = await encryptMessagePromise(message, secretKey)

    expect(encryptedData).toBeDefined()
})

it("should encrypt a message correctly", async () => {
    const message = "Azim"
    const secretKey = 'secretkey12345'
    const encryptedData = await encryptMessagePromise(message, secretKey)

    expect(encryptedData).toBeDefined()

    const decryptMessage = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8)

    expect(decryptMessage).toBe(message)
})