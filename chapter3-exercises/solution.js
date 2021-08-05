//Minimum of number

const minimum = (number1,number2) =>{
    if(number1 === number2){
        return null
    } else if(number1 > number2){
        return number2
    }
    else{
        return number1
    }
}
console.log( minimum(12,18))

//Recursion

function isVen(n){
  if(n % 2 < 0){
    n = Math.abs(n)
  }  
  if(n % 2 === 0){
    return true
  }
  if(n % 2 === 1){
      return false
  }
  else{
      n = n - 2
      return isVen(n)
  }
}
console.log(isVen(50))
console.log(isVen(75))
console.log(isVen(-1))
/*We have a too much recursion call because we have passed a negatif number in function parameter
 and we don't any condition that's checking a negative number. To fix this error we have to define 
 a condition to verify is n is less than 0 and is true we have to find a absolute value of n with
  Math.abs() function*/

  //BEAT COUNTING

  let countChar = (str,b) =>{
    let count = 0
    for(let i = 0; i <= str.length-1; i++){
      let char = str.charAt(i)
      if(char == 'b' || char == 'B'){
        count ++
      }
    }
    return count
  }

  console.log(countChar('BonasBbBB'))
 
  
  let countBs = (strs) =>{
    let count = 0
   for(let i =0 ;i<=strs.length-1;i++){
     let char = strs.charAt(i)
     if(char == 'B'){
       count ++
     }
   }
   return countChar(strs)
  }
  
  console.log(countBs('bsolpsp'))

  
