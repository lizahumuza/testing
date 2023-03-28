const calculator = require("./calculator")

test ('adds two numbers', ()=>{
    expect(calculator.add(2,2)).toBe(4)
})
test ('subtracts two numbers', ()=>{
    expect(calculator.sub(4,2)).toBe(2)
})
test ('multiplies two numbers', ()=>{
    expect(calculator.mul(2,2)).toBe(4)
})
test ('divides two numbers', ()=>{
    expect(calculator.div(6,2)).toBe(3)
})