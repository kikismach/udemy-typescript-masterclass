enum Manufacturers {
  boeing = "boeing",
  airbus = "airbus",
}

interface AircraftInterface {
  _aircraftModel: string;
  pilotName: () => void;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  boeingMethod?: () => void;
}

function StaticMethodDecorator(
  constructor: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log(constructor);
  console.log(methodName);
  console.log(descriptor);
  descriptor.writable = true;
}

class Airplane implements AircraftInterface {
  constructor(public _aircraftModel: string, private pilot: string) {}
  @StaticMethodDecorator
  public static seatCount(): void {
    console.log("150 Seats");
  }

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}
const airplane: AircraftInterface = new Airplane("Airbus A380", "John");
