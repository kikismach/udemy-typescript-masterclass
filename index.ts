// Types can be casted other types.
// This shoudl be done when you are sure that TypeScript is not able to infer the types correctly
let firstName = <any>"Mark";
let lastName = "Doe" as any;
