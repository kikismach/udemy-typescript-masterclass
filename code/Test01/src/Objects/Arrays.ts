const a: number[] = [1, 2, 3];

const b: Array<string> = ["a", "b", "c"];

const c: (string | number)[] = ["a", 1];

type Airplane = {
	name: string;
	model: string;
};

type Airplanes = Airplane[];

let airplanes: Airplanes = [];

// ReadOnly

let number: readonly number[] = [1, 2, 3];
//number.push(3);

type a = Readonly<string[]>;
type b = ReadonlyArray<string>;
type b2 = ReadonlyArray<string | number>;

export {};
