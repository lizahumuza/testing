const calculator={
    add: function add(a,b){
        return a+b;
    },
    sub: function sub(a,b){
        return a-b;
    },
    mul: function multiply(a,b){
        return a*b;
    },
    div: function div(a,b){
        return a/b;
    }
}
console.log(calculator.add(3,4));
console.log(calculator.sub(4,2));
console.log(calculator.mul(3,4));
console.log(calculator.div(4,2));

module.exports = calculator;