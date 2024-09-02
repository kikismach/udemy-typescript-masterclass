/// <reference path="common-utils.ts" />

namespace StringUtils {
  export function add(a: string, b: string): string {
    CommonUtils.log(`Concatenating "${a}" and "${b}"`);
    return a + b;
  }

  export function subtract(a: string, b: string): string {
    CommonUtils.log(`Removing "${b}" from "${a}"`);
    return a.replace(b, "");
  }
}
