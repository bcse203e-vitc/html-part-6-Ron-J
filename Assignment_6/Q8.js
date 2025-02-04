let a= prompt("Enter the first number");
let b= prompt("Enter the second number");
let gcd=1;
for(let i=1; i <= a && i <= b; ++i)
    {
        // Checks if i is factor of both integers
        if(a%i==0 && b%i==0)
            gcd = i;
    }
console.log(gcd);