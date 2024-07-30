enum Manufacturers {
  boeing = "boeing",
  airbus = "airbus",
}

interface AircraftInterface {
  _aircraftModel: string;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  boeingMethod?: () => void;
}

function AircraftManufacturer(manufacturer: Manufacturers) {
  return (target: Function) => {
    if (manufacturer === Manufacturers.airbus) {
      target.prototype.origin = "United States Of America";
      target.prototype.manufacturer = Manufacturers.airbus;
      target.prototype.type = "Jet";
      target.prototype.airbusMethod = () => {
        console.log("Function performed by Airbus");
      };
    } else {
      target.prototype.origin = "France";
      target.prototype.manufacturer = Manufacturers.boeing;
      target.prototype.type = "Helicopter";
      target.prototype.boeingMethod = () => {
        console.log("Function performed by Boeing");
      };
    }
  };
}

@AircraftManufacturer(Manufacturers.airbus)
class Airplane implements AircraftInterface {
  constructor(public _aircraftModel: string, private pilot: string) {}

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}

@AircraftManufacturer(Manufacturers.boeing)
class Helicopter implements AircraftInterface {
  constructor(public _aircraftModel: string, private pilot: string) {}

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const airplane: AircraftInterface = new Airplane("Airbus A380", "John");

const helicopter: AircraftInterface = new Helicopter("H380", "Mark");

console.log(airplane);
console.log(helicopter);

airplane.airbusMethod ? airplane.airbusMethod() : console.log("Method Does not Exist");
