export class Advanced {
	static init() {
		console.log("Advances/index.js");

		type Artist = {
			id: number;
			name: string;
			bio: string;
		};

		type MappedArtistForEdit = {
			[K in keyof Artist]?: Artist[K];
		} & {
			id: number;
		};

		const artist: Artist = {
			id: 1,
			name: "Justin",
			bio: "Biography",
		};

		const editedArtist: MappedArtistForEdit = {
			id: 1,
			name: "Bob",
		};

		// Conditional types

		type Animal = {
			name: string;
		};

		interface Dog extends Animal {
			woof: () => void;
		}

		type Example = Dog extends Animal ? string : number;

		type isString<T> = T extends string ? true : false;

		type A = isString<string>;
		type B = isString<number>;

		// Infer - returns the type

		type ArrayElementType<T> = T extends (infer E)[] ? E : T;

		type TypeOne = ArrayElementType<string[]>;
		//string
		type TypeTwo = ArrayElementType<number[]>;
		//number
		type TypeThree = ArrayElementType<(number | string | boolean)[]>;
		//number | string | boolean
		type TypeFour = ArrayElementType<{ name: string }>;
		//{name:string}
		type TypeFive = ArrayElementType<string>;
		//string

		// Infer Functions
		function returnString() {
			//return "Hello World";
			return 123;
		}
		type FunctionReturnType<T> = T extends () => infer R ? R : T;
		type NewType = FunctionReturnType<typeof returnString>;

		// Infer Arguments
		function person(name: string, age: number) {
			return {
				name: name,
				age: age,
			};
		}
		type GetFirstArgumentOfAnyFunction<T> = T extends (
			first: infer FirstArgument,
			...args: any[]
		) => any
			? FirstArgument
			: never;
		type NewArgumentType = GetFirstArgumentOfAnyFunction<typeof person>;

		type GetSecondArgumentOfAnyFunction<T> = T extends (
			first: any,
			second: infer FirstArgument,
			...args: any[]
		) => any
			? FirstArgument
			: never;
		type NewArgumentSecondType = GetSecondArgumentOfAnyFunction<typeof person>;

		// TS version 5 -> Satisfies Operator

		const color = {
			red: [255, 0, 0],
			grin: "#00ff00",
			blwe: [255, 255, 0],
		};
		const redComponent = color.red[0];
		const greenValue = color.grin.toUpperCase();

		type Properties = "red" | "green" | "blue";
		type RGB = [red: number, green: number, blue: number];
		const color2 = {
			red: [255, 0, 0],
			green: "#00ff00",
			blue: [255, 255, 0],
		} satisfies Record<Properties, RGB | string>;

		const redComponent2 = color2.red[0];
		//const greenValue2 = typeof color2.green === "string" ? color2.green.toUpperCase() : color2.green;
		const greenValue2 = color2.green.toUpperCase(); // Satisfies
	}
}
