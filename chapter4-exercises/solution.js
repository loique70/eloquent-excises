// Range function
let rangeArray = [];
const ranges = (start=0,end) =>{
    for(start;start<=end;start++){
        rangeArray.push(start)
    }
    return rangeArray
}
 console.log(ranges(22,55))

 // sum function

 let arrays = [1,5,6,7,8,2,1]
 let sums = (array) =>{
    let resultSum = 0
    for(let i=0;i<array.length;i++){
        resultSum =  resultSum  + array[i]
    }
    return resultSum
 }
 const a = sums(arrays)
 console.log(a)

  // Reversing an array

let finalArray = []
 const reverseArray = ( reverseA) =>{
    for(let i=0;i<=reverseA.length;i++){
        for(let j=reverseA.length;i<=j;j--){
            finalArray.push(j)
        }
        return finalArray
    }
}
let tableau = [1,2,3,4,5,6,78,9,10,11,12,14,15]
console.log(reverseArray(tableau))
 //reverseArrayInPlace
let reverseArrays = []
 const reverseArrayInPlace  = (array) =>{
    reverseArrays.push(array.reverse())
   return reverseArrays
 }
 tabValue = [1,2,3,4,5,6,78,9,10,11]
 console.log(reverseArrayInPlace(tabValue))

 //A list 
 const  arrayToList = (anArray) =>{
     let list = {}
     if(anArray.length>0){
         list = myObject(anArray[0],arrayToList(anArray.slice(1,3)))
     }
     else{
         return null
     }
     return list
 }
  let myObject = (tabValues,list)=>{
    return {value:tabValues,rest:list}
  }

  console.log(arrayToList([1,2,3]))

 const listToArray = (myList)=>{
    currentArray = [myList.value];
  if (myList.rest) {
    currentArray = currentArray.concat(listToArray(myList.rest));
  }
  return currentArray;
}
console.log(listToArray({value: 1, rest: {value: 2, rest: {value:3, rest: null}}}))

let nth = (list, nr)=>{
    if (nr == 0) {
    return list.value
  } else {
    return nth(list.rest, nr-1)
  }
}
console.log(nth({value: 1, rest: {value: 2, rest: {value:3, rest: null}}},1))
