//Retry
 class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("An error occure here");
   }
}

function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch (e) {
    if (e instanceof MultiplicatorUnitFailure) {
      return reliableMultiply(a, b);
    } else {
      throw e;
    }
  }
}
console.log(reliableMultiply(6,8));

// The Locked Box
const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true; },
  _content: [],
  get content() {
  if (this.locked) throw new Error("Locked!");
  return this._content;
  }
}
  const withBoxUnlocked = (body)=>{
    let progress = 0;
    try {
        if (box.locked = true) {
            box.unlock();
            progress ++;
            body();
            box.lock();
            progress = 0;
        }
        else {
            body();
        }
    }
    finally {
        if (progress > 0) {box.lock()}
    }
}
withBoxUnlocked(()=>{
    box.content.push("gold piece");
})

try {
    withBoxUnlocked(()=>{
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}
console.log(withBoxUnlocked(box))