function once(f, thisValue) {
    let didRun = false;
  
    return function (...args) {
        // return f(...args);
      // return f.call(thisValue, ...args);
      return f.apply(this, args);
      // return f.bind(thisValue)(...args);
    };
}

const thisObj1 = { id: 100 };
const thisObj2 = { id: 200 };

function f(x, y) {
  return `끝번호 ${x}, ${y}입니다! ${this.id}`;
}

const fn = once(f);

console.log(fn.call(thisObj1, 1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn.call(thisObj2, 1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
