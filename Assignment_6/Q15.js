let arr=[1,2,3,4,6,7];
let sum=0;
for(let i=0; i<arr.length;i++){
    sum+=arr[i];
}
let l=arr.length;

console.log((l+1)*(l+2)/2 - sum);