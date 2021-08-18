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

  //Dominant writting direction


function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

  function dominantDirection(text) {
    // Your code here.
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : 'none';
    }).filter(({name}) => name != 'none');
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found"
    
    if (scripts.length == 0) return 'ltr'
    return scripts.reduce((a,b) => a.count > b.count ? a : b).name
    
  }
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl