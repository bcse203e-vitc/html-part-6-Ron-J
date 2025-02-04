let a= prompt("Enter the number");
let b= 0;
while(a!=0){
    b=10*b;
    b+=(a%10);
    a=Math.floor(a/10);
}
console.log(b);