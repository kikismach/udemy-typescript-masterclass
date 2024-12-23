export class StringUtils {
	static add(a: string, b: string) {
		return a + b;
	}

	static substract(a: string, b: string) {
		return a.replace(b, "");
	}
}
