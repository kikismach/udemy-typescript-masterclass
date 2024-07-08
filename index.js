"use strict";
// We have an enume for shapes
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
// Now enuma act as types as TS is able to identify that square enum cannot be assigned to circle type
let circle = {
    kind: ShapeKind.Square,
    radius: 100,
};
