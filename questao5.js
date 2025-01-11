
let str = 'String para inverter';
function InverterString(str) {
    let stringInvertida = '';

    for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
    }
    
    return stringInvertida;
}

console.log("String Original: ", str);
console.log("String invertida: ", InverterString(str));