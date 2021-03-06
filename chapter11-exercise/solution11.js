async function locateScalpel(nest) {
    let name = nest.name;
    for (;;) {
      let direction = await anyStorage(nest, name, 'scalpel');
      if (direction === name) return name;
      name = direction;
    }
  }
  
  function locateScalpel2(nest) {
    const checkOne = function(name) {
      return anyStorage(nest, name, 'scalpel').then(direction => {
        if (direction === name) return name;
        return checkOne(direction);
      });
    };
    return checkOne(nest.name);
  }
  
  locateScalpel2(bigOak).then(console.log);
  

  // Promise all
  let  Promise_all= (promises)=>{
    return new Promise((resolve, reject) => {
      if (!promises.length) resolve(promises);
      let pending = promises.length;
      let result = [];
      promises.forEach((p, i) =>
        p
          .then(r => {
            pending--;
            result[i] = r;
            if (pending == 0) resolve(result);
          })
          .catch(e => reject(e))
      );
    });
  }
  
  // Test code.
  Promise_all([]).then(array => {
    console.log('This should be []:', array);
  });
  function soon(val) {
    return new Promise(resolve => {
      setTimeout(() => resolve(val), Math.random() * 500);
    });
  }
  Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log('This should be [1, 2, 3]:', array);
  });
  Promise_all([soon(1), Promise.reject('X'), soon(3)])
    .then(array => {
      console.log('We should not get here');
    })
    .catch(error => {
      if (error != 'X') {
        console.log('Unexpected failure:', error);
      }
    });
