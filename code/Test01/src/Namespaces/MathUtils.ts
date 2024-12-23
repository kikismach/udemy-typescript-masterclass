import { CommonUtils } from "./CommonUtils.js";

export class MathUtils {
	static add(a: number, b: number) {
		CommonUtils.log("This is an add numeric function");
		return a + b;
	}

	substract(a: number, b: number) {
		return a - b;
	}
}
