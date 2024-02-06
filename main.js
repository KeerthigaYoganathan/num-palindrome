let a = [313, 565, 77, 81];
// let b = [];
let palindromeArr = [];

for( let i=0; i<a.length; i++){
    let check = a[i];
    let c = 0;
    while(a[i]>0){
        let temp = a[i]%10; //5
        a[i] = parseInt(a[i]/10); //56
        c = c*10 + temp;//5
    }
    if(c==check){
        console.log(`${check} is palindrome`);
        palindromeArr.push(c);
    }
    else{
        console.log(`${check} is not a palindrome`);
    }
}
console.log(palindromeArr);








// while(a>0){
//     let temp = a%10; //3 //0 //3
//     a = parseInt(a/10); //30 //3 //0
//     c = c*10 + temp;//3 //30 //303
// }
// if(c==b){
//     console.log(`${b} is palindrome`);
// }
// else{
//     console.log(`${b} is not a palindrome`);
// }