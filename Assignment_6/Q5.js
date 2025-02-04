let a= prompt("Enter the number");
let n=0;
while(a!=0){
    n+=1;
    a=Math.floor(a/10);
}
console.log(n);