type CustomDate = Date;
type CustomString = string;

// Type declarations using conditional types in TypeScript
type TrueString = CustomString extends string ? true : false;
type ConditionalNumber = CustomDate extends Date ? number : string;
type DateAssigment = CustomDate extends Date ? Date : undefined;

// We'll dive deeper into Conditional Types later in the course
