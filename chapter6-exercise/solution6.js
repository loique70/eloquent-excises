// A vector type
class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    
    plus(vector) {
      let newVector = new Vec(vector.x + this.x, vector.y + this.y);
      return newVector;
    }
    
    minus(vector) {
      let newVector = new Vec(vector.x - this.x, vector.y - this.y);
      return newVector;
    }
    
    get length() {
      return Math.sqrt(this.x**2 + this.y**2); 
    }
  }
  exampleVector = new Vec(5,7);
  console.log(exampleVector.length);
  console.log(exampleVector.plus(new Vec(5,3))); 

  // Groups

  class Group {
    constructor() {
      this.group = [];
      return this;
    }
      
    add(value) {
      if (!this.has(value)) {
        this.group.push(value);
        return this;
      }
    }
    
    delete(value) {
      if (this.has(value)) {
        this.group = this.group.filter(x => x !== value)
        return this;
      }
    }
    
    has(value) {
      return this.group.includes(value)
    }
    
    from(iterableObject) {
      for (let value of iterableObject) {
        this.add(value);
      }
      return this;
    }
  }


  //  Borrowing A Methods

  class MyObject {
    constructor() {
    }
    
    hasOwnProperty(thisVarWillBeIgnored) {
      console.log("I do what I want");
    }
  }
  let myObject = new MyObject("hopeful");
  myObject.hasOwnProperty('test'); 
  console.log(Object.hasOwnProperty.call(this,'test'));  

  //iterables goups

  class GroupIterator {
    constructor(group) {
      this.x = 0;
      this.group = group.group;
    }
    
    next() {
      if (this.x === this.group.length) return {done: true};
      
      let value = this.group[this.x];
      this.x++
      
      return {value, done: false}
    }
  }
  Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
  }
  for (let el of group.from([4,5,6])) {
    console.log(el); 
  }
