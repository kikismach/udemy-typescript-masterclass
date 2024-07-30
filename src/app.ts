function FirstDecorator(name: string) {
  return function (constructor: Function) {
    console.log(`${name} Invoked`);
    console.log(constructor);
  };
}

@FirstDecorator("First Decorator")
class Aircraft {
  constructor(public _aircraftModel: string, private pilot: string) {
    console.log("Aircraft Class Instantiated");
  }

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const aircraft = new Aircraft("Airbus A380", "John");
