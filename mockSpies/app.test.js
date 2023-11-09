import { describe, it, expect, vi } from 'vitest'
import { generateToken } from './app'


describe("generate Token ()", () => {
    it("should execute the logger function if passed", () => {
        const loggerFn = vi.fn()
        generateToken(loggerFn)
        expect(loggerFn).toHaveBeenCalled()
    })
})