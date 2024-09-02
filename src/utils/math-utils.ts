/// <reference path="common-utils.ts" />

namespace MathUtils {
  export function add(a: number, b: number): number {
    CommonUtils.log(`Adding ${a} and ${b}`);
    return a + b;
  }

  export function subtract(a: number, b: number): number {
    CommonUtils.log(`Subtracting ${b} from ${a}`);
    return a - b;
  }
}
