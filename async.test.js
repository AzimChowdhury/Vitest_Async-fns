import { expect, it } from "vitest";
import { encryptMessage, encryptMessagePromise } from "./async";

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