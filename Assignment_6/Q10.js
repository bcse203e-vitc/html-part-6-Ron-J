
let num= prompt("Enter the number");
let originalNum = num;
let result=0;
while (originalNum != 0) {
    remainder = originalNum % 10;
    result += remainder * remainder * remainder;
    originalNum = Math.floor(originalNum/10);
}
if (result == num){
    console.log("It is an armstrong number");
}
else{
    console.log("It is not an armstrong number");
}