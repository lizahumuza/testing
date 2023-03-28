function analyzeArray(numbers) {
    const sum = 0;
    const min = numbers[0];
    const max = numbers[0];
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  
      if (numbers[i] < min) {
        min = numbers[i];
      }
  
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return {
      average: sum / numbers.length,
      min: min,
      max: max,
      length: numbers.length
    };
  }

const numbers = [1, 8, 3, 4, 2, 6];

const result = analyzeArray(numbers);

console.log(result.average); 
console.log(result.min); 
console.log(result.max); 
console.log(result.length)

 
module.exports= analyzeArray;