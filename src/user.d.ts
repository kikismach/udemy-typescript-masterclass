// export interface UserProfile {
//   userId: number;
//   userName: string;
//   status: "active" | "inactive";
// }

//  Instead of using an interface you can use a type also
export type UserProfile = {
  userId: number;
  userName: string;
  status: "active" | "inactive";
};

export function createUserProfile(id: number, name: string): UserProfile;
