"use strict";
// We have an enume for shapes
var ShapeKind;
(function (ShapeKind) {
    ShapeKind["Circle"] = "circle";
    ShapeKind["Square"] = "sqaure";
})(ShapeKind || (ShapeKind = {}));
// Now enuma act as types as TS is able to identify that square enum cannot be assigned to circle type
let circle = {
    kind: ShapeKind.Square,
    radius: 100,
};
//  Enums automatically become union of each of its members
// Here the ShapeKind Enum is acting as a union of ""
function printShape(shape /* same as "Circle"| "Square"  */) {
    // We can check teh shape in step one
    console.log(`Shape is: ${shape}`);
    // Also an or comparison TS will say that this is already an enum so this comparison is not needed
    if (ShapeKind.Circle || ShapeKind.Square) {
    }
}
// We can invoke the function
printShape(ShapeKind.Circle);
