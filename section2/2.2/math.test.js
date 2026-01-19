const sum = require('./math')

describe("Math Functions", ()=>{
    it("should add 2 and 3 to equal 5", ()=>{
        expect(sum(2, 3)).toBe(5)
    })
})