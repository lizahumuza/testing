function reverseStr(str){
    str = "hello world";
    const reversedStr = str.split("").reverse().join("")
    return reversedStr;
}

module.exports= reverseStr;