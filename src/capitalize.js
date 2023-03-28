
function capitalize(str){
    const result = str.charAt(0).toUpperCase() + str.slice(1);
    return result;
}
console.log(capitalize("happy birthday"))

module.exports=capitalize;