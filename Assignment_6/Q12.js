
let arr = [1,2,3,4,3,2,3];
 
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
 console.log(removeDuplicates(arr));