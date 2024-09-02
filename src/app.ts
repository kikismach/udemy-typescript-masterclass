namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }

  export function subtract(a: number, b: number): number {
    return a - b;
  }
}

namespace StringUtils {
  export function add(a: string, b: string): string {
    return a + b;
  }

  export function subtract(a: string, b: string): string {
    return a.replace(b, "");
  }
}

let sum = MathUtils.add(5, 3);

let combined = StringUtils.add("Hello, ", "World!");
let modified = StringUtils.subtract("Hello, World!", "World!");
