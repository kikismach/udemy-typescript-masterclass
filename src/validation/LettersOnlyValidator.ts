/// <reference path="Validation.ts" />
namespace Validation {
  // Declare the constant inside the file where it is needed
  const lettersRegexp = /^[A-Za-z]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
}
