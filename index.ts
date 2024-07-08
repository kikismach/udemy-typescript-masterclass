// Declaring an array of numbers
let a: number[] = [1, 2, 3];
//  Generic syntax of declaring array of strings
let b: Array<string> = ["a", "b", "c"];
// Array containing mutiple types
let c: (string | number)[] = ["a", "b", 1];

// Declare a Caterer type
type Caterer = {
  name: string;
  address: string;
  phone: number;
};

// Declare a Seats type
type Seats = {
  [keyof: string]: string;
};

// Declare a Airplane Type
type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
  seats: Seats;
};

// Declarign a type for an array of Airplanes
// Example of an array of objects
type Airplanes = Airplane[];

// Assign Airplane Type to Object
let airplanes: Airplanes = [
  {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
      name: "Special Food Ltd",
      address: "484, Some Street, New York",
      phone: 7867856751,
    },
    seats: {
      A1: "John Doe",
      A2: "Mark Doe",
      A3: "Sam Doe",
    },
  },
];
