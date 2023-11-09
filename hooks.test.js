import { beforeEach, expect, it } from "vitest";
import { User } from "./hooks";

const testEmail = 'test@example.com';
let user;

beforeEach(() => {
    user = new User(testEmail);
})

it('should have an email property', () => {
    expect(user).toHaveProperty('email');
})


it.concurrent('should update the email property', () => {
    const newEmail = 'test2@example.com';
    user.updateEmail(newEmail);
    expect(user.email).toBe(newEmail);
})

it('should store the email value', () => {
    expect(user.email).toBe(testEmail);
})


it('should clear the email property', () => {
    user.clearEmail();
    expect(user.email).toBe('');
})

it('should clear the email property after clearing the email', () => {
    user.clearEmail();
    expect(user).toHaveProperty('email')
})