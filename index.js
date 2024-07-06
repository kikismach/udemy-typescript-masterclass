/**
 * BigInt type newly introduced in ES2020, not available below that
 */
var bigInt1 = BigInt(945845);
var bigInt2 = 123564564n;
// BigInt constructor also create bigint in a similar way 
console.log(bigInt1);
// Maximum integer possible with JavaScript before BigInt
var safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);
// Adding values to the maximum integer does not change the number
var safeIntPlusOne = safeInt + 1;
var safeIntPlusTwo = safeInt + 2;
console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);
// They would still be the same even after adding number
console.log(safeIntPlusOne === safeIntPlusTwo);
// Expression that evali
var c = bigInt1 - bigInt1;
// Cannot use a floating point value for creating a bigint
// TS warns you if you try to create BigInt with wrong types
var e = 24551.2n;
// Type checks for methods which only require number as an arguement
var f = Math.log(bigInt1);
