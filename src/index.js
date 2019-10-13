module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i <= str.length * 2; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            let brackets_sequence = bracketsConfig[j].join(""); //convert bracketsConfig into a string          
            while (str.includes(brackets_sequence)) {
                str = str.replace(brackets_sequence, ""); //remove the set from the string by the cycle     
            }
        }
    }
    if (str.length === 0) {
        return true; //If the string is empty, the brackets sequence  is correct 
    } else {
        return false;
    }
}
