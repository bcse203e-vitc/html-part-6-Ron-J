let a= prompt("Enter the first number")
let b= prompt("Enter the second number")
let c= prompt("Enter the third number")
let largest=0;
if(a>b){
    largest=a;
}
else{
    largest=b;
}
if(c>largest){
    largest=c;
}

console.log(largest);