import { createUserProfile } from "./user.js";

// without declaration files the arguments are inferred as any
// When declaration file is created then types are defined properly and inferred properly

const userProfile = createUserProfile(1, "John Doe");
console.log(userProfile);
