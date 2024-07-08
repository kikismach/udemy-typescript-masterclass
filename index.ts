// We have an enume for shapes
enum ShapeKind {
  Circle = "circle",
  Square = "sqaure",
}

// A circle type would have additional properties
type Circle = {
  kind: ShapeKind.Circle;
  radius: number;
};

// A sqaure type would have additional properties
type Square = {
  kind: ShapeKind.Square;
  sideLength: number;
};

// Now enuma act as types as TS is able to identify that square enum cannot be assigned to circle type
let circle: Circle = {
  kind: ShapeKind.Square,
  radius: 100,
};

//  Enums automatically become union of each of its members
// Here the ShapeKind Enum is acting as a union of ""
function printShape(shape: ShapeKind /* same as "Circle"| "Square"  */) {
  // We can check teh shape in step one
  console.log(`Shape is: ${shape}`);
  // Also an or comparison TS will say that this is already an enum so this comparison is not needed
  if (ShapeKind.Circle || ShapeKind.Square) {
  }
}

// We can invoke the function
printShape(ShapeKind.Circle);
