//Looping Triangles

let myResult ='';
let callNumber = 7;
for(let i =1;i<=callNumber;i++){
    for(let j =1; j<=i;j++){
        myResult += '#';
    }
    myResult += '\n'
}
//Output myResult
console.log(myResult)

//FizzBuzz
let tabVal = [];
let tabVal1 = [];
let tabVal2 = [];
let a =''
let totalNumber = 100;
for(let i=1;i<=totalNumber;i++){
    if(i % 3 === 0){
        console.log('Fizz');
        tabVal.push(i)
    }
    else if( i % 5 === 0){
        console.log('Buzz');
        tabVal1.push(i)
     }
     else{
        console.log(i)
     }
     if(i%3 === 0 && i%5 === 0){
         console.log('FizzBuzz')
         tabVal2.push(i)
     }
   
}
// Array of each condition statement
console.log(tabVal)
console.log(tabVal1)
console.log(tabVal2)