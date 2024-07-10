// Types can be casted other types.
// This shoudl be done when you are sure that TypeScript is not able to infer the types correctly
let firstName = <any>"Mark";
let lastName = "Doe" as any;

let user = {
  name: "Mark",
  email: "mark@email.com",
};

type User = {
  name: string;
  email: string;
};

function fetchUser() {
  return user as User;
}

const fetchedData = fetchUser();
