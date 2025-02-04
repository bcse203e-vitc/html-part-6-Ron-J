function isPangram(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowerCased = sentence.toLowerCase();

    for (let char of alphabet) {
        if (!lowerCased.includes(char)) {
            return "It is not a pangram.";
        }
    }
    return "It is a pangram.";
}

let string=prompt("Enter a string");
console.log(isPangram(string)); 

