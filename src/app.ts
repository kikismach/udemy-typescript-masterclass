function FirstDecorator(constructor: Function) {
  console.log("Decorator Invoked");
  console.log(constructor);
}

@FirstDecorator
class Aircraft {
  constructor(public _aircraftModel: string, private pilot: string) {}

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}
