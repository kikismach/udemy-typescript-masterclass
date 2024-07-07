"use strict";
// A funtion delclaration that never completes and returns a never type
const throwError = (errorMsg) => {
    throw new Error(errorMsg);
};
