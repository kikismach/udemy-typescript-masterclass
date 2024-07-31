export namespace User {
  interface UserProfile {
    id: number;
    name: string;
    status: "active" | "inactive";
  }

  function createUser(id: number, name: string): UserProfile;
  function updateUser(id: number, user: UserProfile): UserProfile;
}
