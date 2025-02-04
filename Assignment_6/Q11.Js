let string=prompt("Enter the string");
let vowels=0;
let consonants=0;
for(let i=0; i<string.length; i++){
    if(string[i]=='a' || string[i]=='e' || string[i]=='i' || string[i]=='o' || string[i]=='u'){
        vowels+=1;
    }
    else{
        consonants+=1;
    }
}
console.log('Vowels ', vowels, 'Consonants ', consonants);