// Decorators are invoked once when the class its build not instantiated.

@FirstDecorator("First Decorator")
class Aircraft2 {
	constructor(public _aircraftModel: string, private pilot: string) {
		console.log("Aircraft Class Instantiated");
	}

	public pilotName() {
		console.log(this.pilot);
	}

	public aircraftModel() {
		console.log(this._aircraftModel);
	}
}

function FirstDecorator(name: string) {
	return function (target: Function) {
		console.log(`${name} Invoked`);
		console.log(target);
	};
}

const aircraft2 = new Aircraft2("Airbus A380", "Mary");

/*--------------------------------------------------*/
console.clear();

enum Manufacturers {
	boeing = "boeing",
	airbus = "airbus",
}

interface IAirplane {
	_aircraftModel: string;
	prototype?: any;
	origin?: string;
	manufacturer?: string;
	type?: string;
	airbusFn?: () => void;
	boeingFn?: () => void;
	pilotName: () => void;
	copilotName: (name: string, lastname: string) => void;
}

function AircraftManufacturer(manufacturer: Manufacturers) {
	return (target: Function) => {
		if (manufacturer === Manufacturers.airbus) {
			target.prototype.origin = "USA";
			target.prototype.manufacturer = Manufacturers.airbus;
			target.prototype.type = "Jet";
			target.prototype.airbusFn = () => {
				console.log("Some airbus function");
			};
		} else {
			target.prototype.origin = "France";
			target.prototype.manufacturer = Manufacturers.boeing;
			target.prototype.type = "Helicopter";
			target.prototype.boeingFn = () => {
				console.log("Some boeing function");
			};
		}
	};
}

function MethodDecorator(
	prototypeObject: Object,
	functionName: string,
	propertyDescriptor: PropertyDescriptor
) {
	console.log("MethodDecorator");
	console.log(prototypeObject);
	console.log(functionName);
	console.log(propertyDescriptor);
}

function StaticMethodDecorator(
	constructor: Object,
	functionName: string,
	propertyDescriptor: Object
) {
	console.log("StaticMethodDecorator");
	console.log(constructor);
	console.log(functionName);
	console.log(propertyDescriptor);
}

function ParameterDecorator(prototypeObject: Object, functionName: string, index: number) {
	console.log("ParameterDecorator");
	console.log(prototypeObject);
	console.log(functionName);
	console.log(index);
}

function PropertyDecorator(prototypeObject: Object, propertyName: string) {
	console.log("PropertyDecorator");
	console.log(prototypeObject);
	console.log(propertyName);
}

function AccesorDecorator(
	prototypeObject: Object,
	accesorName: string,
	propertyDescriptor: PropertyDescriptor
) {
	console.log("AccesorDecorator");
	console.log(prototypeObject);
	console.log(accesorName);
	console.log(propertyDescriptor);
}

@AircraftManufacturer(Manufacturers.airbus)
class Airplane implements IAirplane {
	@PropertyDecorator
	public _aircraftModel: string;

	constructor(aircraftModel: string, private pilot: string) {
		this._aircraftModel = aircraftModel;
	}

	@AccesorDecorator
	public get aircraftModel() {
		return this._aircraftModel;
	}

	@MethodDecorator
	public pilotName() {
		console.log(this.pilot);
	}

	public copilotName(name: string, @ParameterDecorator lastname: string) {
		console.log(name);
		console.log(lastname);
	}

	public airplaneModel() {
		console.log(this._aircraftModel);
	}

	@StaticMethodDecorator
	public static seatCount() {
		console.log("150 seats.");
	}
}

console.log("airplane object");
const airplane: IAirplane = new Airplane("Airbus A380", "Mary");
console.log(airplane);

airplane.airbusFn ? airplane.airbusFn() : console.log("No method exists");
airplane.pilotName = () => console.log("Method changed");
airplane.pilotName();
Airplane.seatCount();
airplane.copilotName("George", "Smith");

/*--------------------------------------------------*/
console.clear();

interface IMapLocation {
	lat: number;
	long: number;
}

function DecoratorOne(target: Function) {
	console.log("Decorator one");
}

function DecoratorTwo(target: Function) {
	console.log("Decorator two");
}

function AddLocation(lat: number, long: number) {
	return <T extends { new (...args: any[]): {} }>(classConstructor: T) => {
		return class extends classConstructor {
			public mapLocation: IMapLocation;
			constructor(...args: any[]) {
				super(...args);
				this.mapLocation = { lat, long };
			}
		};
	};
}

@DecoratorOne
@DecoratorTwo
@AddLocation(1.123, 1.876)
class Person {
	constructor(public name: string, public age: number) {}
}

const person: Person = new Person("Mark", 38);
console.log(person);

/*--------------------------------------------------*/
console.clear();

// Composition and Evaluation

function First() {
	console.log("First(): factory evaluated");

	return function (target: any, methodName: string) {
		console.log("First(): called");
	};
}

function Second() {
	console.log("Second(): factory evaluated");

	return function (target: any, methodName: string) {
		console.log("Second(): called");
	};
}

class ExampleClass {
	@First()
	@Second()
	myMethod() {}
}

export default {};
