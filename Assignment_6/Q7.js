let n= prompt("Enter the number of terms");

let a=0;
let b=1;
console.log('0\n1')
let c=1;
for(let i=0;i<n-2;i++){
    c=a+b;
    a=b;
    b=c;
    console.log(c, ' ');
}