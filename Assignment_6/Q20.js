function charCount(str) {
    let count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}
let string=prompt("Enter the string");
console.log(charCount(string));
