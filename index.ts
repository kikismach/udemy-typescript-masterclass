// We have an enume for shapes
enum ShapeKind {
  Circle,
  Square,
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
