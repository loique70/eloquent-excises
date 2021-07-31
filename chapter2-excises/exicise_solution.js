//Looping Triangles

let myResult ='';
let callNumber = 7;
for(let i =1;i<=callNumber;i++){
    for(let j =1; j<=i;j++){
        myResult += '*';
    }
    myResult += '\n'
}
//Output myResult
console.log(myResult)