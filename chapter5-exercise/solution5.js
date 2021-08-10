// flatten function
let flatten = (anArray)=>{
    return anArray.reduce(myFunction,[])
}
let myFunction  = (array1,array2)=>{
    if(Array.isArray(array2)){
       return array1.concat(flatten(array2))
    }
    else{
        return array1.concat(array2)
    }
}
b = [['1'],'2',['3',['4','5']]]
console.log(flatten(b))

//your own loop
const loop = (value, testFct, updateFct, bodyFct)=> {
    console.log(value);
    for(i=value; testFct(i); i=updateFct(i)) {
      bodyFct(i);
    }
  }
  loop(0, i=>i<=10, i=>++i, console.log)

  //everything

  let every = (inputArray, predicate)=>{
    trackInequality = [];
    for (let element of inputArray) {
      if (!predicate(element)) {
        trackInequality.push(true)
      }
    }
    if (trackInequality.length > 0) {
      return false;
    } else {
      return true;
    }
  }
  console.log(every([1,2,3,4,5], x=>x<=5)) 
  console.log(every([2], x=>x>=5))