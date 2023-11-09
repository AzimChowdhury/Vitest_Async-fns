import { expect, it } from "vitest";
import { User } from "./hooks";


it('should have an email property', () => {
    const testEmail = 'test@example.com';
    const user = new User(testEmail);
    expect(user).toHaveProperty('email');
})

it('should update the email property', () => {
    const testEmail = 'test@example.com';
    const user = new User(testEmail);
    const newEmail = 'test2@example.com';
    user.updateEmail(newEmail);
    expect(user.email).toBe(newEmail);
})

it('should clear the email property', () => {
    const testEmail = 'test@example.com';
    const user = new User(testEmail);
    user.clearEmail();
    expect(user.email).toBe('');
})

it('should clear the email property after clearing the email', () => {
    const testEmail = 'test@example.com';
    const user = new User(testEmail);
    user.clearEmail();
    expect(user).toHaveProperty('email')
})