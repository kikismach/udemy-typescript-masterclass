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

function MethodDecorator(
  classPrototype: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);
  descriptor.writable = true;
}

class Airplane implements AircraftInterface {
  constructor(public _aircraftModel: string, private pilot: string) {}

  @MethodDecorator
  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}
const airplane: AircraftInterface = new Airplane("Airbus A380", "John");

airplane.pilotName = () => console.log("Function Changed");

airplane.pilotName();
