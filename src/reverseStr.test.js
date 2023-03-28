const reverseStr = require("./reverseStr");

test ('reverses a string' , ()=>{
    expect(reverseStr("hello world")).toBe("dlrow olleh")
})