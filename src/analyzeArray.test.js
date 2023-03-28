const analyzeArray = require("./analyzeArray")

test ('should return correct average,minimum,maximum and length of array' , ()=>{
    const numbers = [1, 8, 3, 4, 2, 6];

    const result = analyzeArray(numbers);

    expect(result.average).toBe(4)
    expect(result.min).toBe(1)
    expect(result.max).toBe(8)
    expect(result.length).toBe(6)

})
