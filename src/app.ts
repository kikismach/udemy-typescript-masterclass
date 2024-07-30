function ParameterDecorator(classPrototype: Object, methodname: string, index: number) {
  console.log(classPrototype);
  console.log(methodname);
  console.log(index);
}

class Airplane {
  constructor(public _aircraftModel: string) {}

  public static seatCount(): void {
    console.log("150 Seats");
  }

  public pilotName(name: string, @ParameterDecorator lastName: string) {
    console.log(name);
    console.log(lastName);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}
