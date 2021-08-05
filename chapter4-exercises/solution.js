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

 