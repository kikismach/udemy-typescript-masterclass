function FirstDecorator(constructor: Function) {
  console.log("Decorator Invoked");
  console.log(constructor);
}

@FirstDecorator
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
