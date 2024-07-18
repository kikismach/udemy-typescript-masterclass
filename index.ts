// A subtype will always exten the parent type
type check = any extends unknown ? true : false;
type check2 = string extends any ? true : false;
type check3 = number extends any ? true : false;
type check4 = {} extends Object ? true : false;
type check5 = [] extends Object ? true : false;
type check6 = Function extends Object ? true : false;
type check7 = never extends any ? true : false;

// A funtion delclaration that never completes and returns a never type
const throwError = (errorMsg: string) => {
  throw new Error(errorMsg);
};

let strings: Object = ["a", "b"];
let myFunc: Function = () => 2;
